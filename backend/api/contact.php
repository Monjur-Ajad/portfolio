<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->safeLoad();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$message = $input['message'] ?? '';
$company = $input['company'] ?? '';
$service = $input['service'] ?? '';

if (empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email and message are required']);
    exit;
}

// Capture User Info
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
$browser = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';
$country = 'Unknown';

// Try to get country from IP
try {
    $geo_json = file_get_contents("http://ip-api.com/json/{$ip}");
    $geo_data = json_decode($geo_json, true);
    if ($geo_data && $geo_data['status'] === 'success') {
        $country = $geo_data['country'];
    }
} catch (\Exception $e) {
    // Ignore geo lookup errors
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'mail.monjurajad.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['EMAIL_USER'] ?? '';
    $mail->Password   = $_ENV['EMAIL_PASS'] ?? '';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable implicit TLS encryption
    $mail->Port       = 465;

    // Bypass SSL certificate validation if needed
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Recipients
    $mail->setFrom($_ENV['EMAIL_USER'], $name ?: 'Portfolio Contact');
    $mail->addAddress('info@monjurajad.com');
    $mail->addReplyTo($email);

    // Content
    $mail->isHTML(true);
    $mail->Subject = $service ?: "New Contact from " . ($name ?: 'Portfolio');
    
    $htmlBody = "
        <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 15px;\">
            <h2 style=\"color: #f15a24; border-bottom: 2px solid #f15a24; padding-bottom: 10px;\">New Contact Message</h2>
            
            <table style=\"width: 100%; border-collapse: collapse; margin-top: 20px;\">
                <tr><td style=\"padding: 10px 0; border-bottom: 1px solid #f9f9f9;\"><strong>Name:</strong></td><td>{$name}</td></tr>
                <tr><td style=\"padding: 10px 0; border-bottom: 1px solid #f9f9f9;\"><strong>Email:</strong></td><td>{$email}</td></tr>
                <tr><td style=\"padding: 10px 0; border-bottom: 1px solid #f9f9f9;\"><strong>Company:</strong></td><td>{$company}</td></tr>
                <tr><td style=\"padding: 10px 0; border-bottom: 1px solid #f9f9f9;\"><strong>Service:</strong></td><td>{$service}</td></tr>
            </table>

            <div style=\"margin-top: 30px; padding: 20px; background-color: #fcfcfc; border-radius: 10px; border-left: 4px solid #f15a24;\">
                <p style=\"margin: 0; font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase;\">Message Content:</p>
                <p style=\"white-space: pre-wrap; margin-top: 10px; line-height: 1.6;\">" . nl2br(htmlspecialchars($message)) . "</p>
            </div>

            <div style=\"margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 11px; color: #999;\">
                <p style=\"margin-bottom: 5px;\"><strong>Technical Metadata:</strong></p>
                <p style=\"margin: 2px 0;\"><strong>IP Address:</strong> {$ip}</p>
                <p style=\"margin: 2px 0;\"><strong>Browser Info:</strong> {$browser}</p>
                <p style=\"margin: 2px 0;\"><strong>Origin Country:</strong> {$country}</p>
            </div>
        </div>
    ";
    
    $mail->Body    = $htmlBody;
    $mail->AltBody = "Name: $name\nEmail: $email\nCompany: $company\nService: $service\n\nMessage:\n$message\n\nTechnical Metadata:\nIP: $ip\nBrowser: $browser\nCountry: $country";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email', 'details' => $mail->ErrorInfo]);
}
