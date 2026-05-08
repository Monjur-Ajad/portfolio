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
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Get Page Info
$page = $_GET['page'] ?? $_POST['page'] ?? 'Home';
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
} catch (\Exception $e) {}

// Increment View Count
$viewsFile = __DIR__ . '/../data/views.json';
$dataDir = __DIR__ . '/../data';
if (!is_dir($dataDir)) mkdir($dataDir, 0755, true);
if (!file_exists($viewsFile)) file_put_contents($viewsFile, json_encode(['count' => 0]));

$data = json_decode(file_get_contents($viewsFile), true);
$data['count'] += 1;
file_put_contents($viewsFile, json_encode($data), LOCK_EX);

// Send Email Notification
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'mail.monjurajad.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['EMAIL_USER'] ?? '';
    $mail->Password   = $_ENV['EMAIL_PASS'] ?? '';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->SMTPOptions = ['ssl' => ['verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true]];

    $mail->setFrom($_ENV['EMAIL_USER'], 'Portfolio Tracker');
    $mail->addAddress('info@monjurajad.com');
    $mail->Subject = "New Visit: {$page}";
    $mail->isHTML(true);

    $mail->Body = "
        <div style=\"font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;\">
            <h2 style=\"color: #2563eb;\">Page Visit Alert</h2>
            <p><strong>Page:</strong> <span style=\"color: #f15a24; font-weight: bold;\">{$page}</span></p>
            <p><strong>Total Views:</strong> {$data['count']}</p>
            <hr />
            <p><strong>IP Address:</strong> {$ip}</p>
            <p><strong>Country:</strong> {$country}</p>
            <p><strong>Browser:</strong> <small>{$browser}</small></p>
            <p><strong>Time:</strong> " . date('Y-m-d H:i:s') . "</p>
        </div>
    ";

    $mail->send();
} catch (Exception $e) {
    // Silently fail email but still return views
}

echo json_encode(['views' => $data['count'], 'success' => true]);
