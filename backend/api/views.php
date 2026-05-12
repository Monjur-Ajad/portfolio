<?php
require_once __DIR__ . '/../vendor/autoload.php';
use Dotenv\Dotenv;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->safeLoad();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

$page = $_GET['page'] ?? $_POST['page'] ?? 'Home';
$ip   = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
if (str_contains($ip, ',')) $ip = trim(explode(',', $ip)[0]);
$browser = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';

$body     = json_decode(file_get_contents('php://input'), true) ?? [];
$page     = $body['page']     ?? $page;
$screen   = $body['screen']   ?? 'Unknown';
$language = $body['language'] ?? 'Unknown';
$referrer = !empty($body['referrer']) ? $body['referrer'] : 'Direct';
$timezone = $body['timezone'] ?? 'Unknown';

$ua = $browser;
$os = 'Unknown';
if     (str_contains($ua, 'Windows NT 10'))  $os = 'Windows 10/11';
elseif (str_contains($ua, 'Windows NT 6.3')) $os = 'Windows 8.1';
elseif (str_contains($ua, 'Windows NT 6.1')) $os = 'Windows 7';
elseif (str_contains($ua, 'Windows'))        $os = 'Windows';
elseif (str_contains($ua, 'iPhone'))         $os = 'iPhone (iOS)';
elseif (str_contains($ua, 'iPad'))           $os = 'iPad (iOS)';
elseif (str_contains($ua, 'Android'))        $os = 'Android';
elseif (str_contains($ua, 'Mac OS X'))       $os = 'MacOS';
elseif (str_contains($ua, 'Linux'))          $os = 'Linux';

$device = 'Desktop';
if     (str_contains($ua, 'iPad') || str_contains($ua, 'Tablet'))                                   $device = 'Tablet';
elseif (str_contains($ua, 'Mobile') || str_contains($ua, 'iPhone') || str_contains($ua, 'Android')) $device = 'Mobile';

$browserName = 'Unknown';
if     (str_contains($ua, 'Edg'))                               $browserName = 'Microsoft Edge';
elseif (str_contains($ua, 'OPR') || str_contains($ua, 'Opera')) $browserName = 'Opera';
elseif (str_contains($ua, 'Chrome'))                            $browserName = 'Google Chrome';
elseif (str_contains($ua, 'Firefox'))                           $browserName = 'Mozilla Firefox';
elseif (str_contains($ua, 'Safari'))                            $browserName = 'Safari';

$country = $city = $region = $isp = 'Unknown';
try {
    $geo_json = @file_get_contents("http://ip-api.com/json/{$ip}?fields=status,country,regionName,city,isp");
    $geo_data = json_decode($geo_json, true);
    if ($geo_data && $geo_data['status'] === 'success') {
        $country = $geo_data['country']    ?? 'Unknown';
        $city    = $geo_data['city']       ?? 'Unknown';
        $region  = $geo_data['regionName'] ?? 'Unknown';
        $isp     = $geo_data['isp']        ?? 'Unknown';
    }
} catch (\Exception $e) {}

$viewsFile = __DIR__ . '/../data/views.json';
$dataDir   = __DIR__ . '/../data';
if (!is_dir($dataDir)) mkdir($dataDir, 0755, true);
if (!file_exists($viewsFile)) file_put_contents($viewsFile, json_encode(['count' => 0]));
$data = json_decode(file_get_contents($viewsFile), true);
$data['count'] += 1;
file_put_contents($viewsFile, json_encode($data), LOCK_EX);

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host        = 'mail.monjurajad.com';
    $mail->SMTPAuth    = true;
    $mail->Username    = $_ENV['EMAIL_USER'] ?? '';
    $mail->Password    = $_ENV['EMAIL_PASS'] ?? '';
    $mail->SMTPSecure  = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port        = 465;
    $mail->SMTPOptions = ['ssl' => ['verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true]];
    $mail->CharSet     = 'UTF-8';
    $mail->Encoding    = 'base64';
    $mail->setFrom($_ENV['EMAIL_USER'], 'Portfolio Tracker');
    $mail->addAddress('info@monjurajad.com');
    $mail->Subject = "New Visit: {$page} | {$city}, {$country}";
    $mail->isHTML(true);

    $mail->Body = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;'>

        <div style='background: linear-gradient(135deg, #2563eb, #1e40af); padding: 24px; text-align: center;'>
            <h2 style='color: #ffffff; margin: 0; font-size: 22px;'>Portfolio Visit Alert</h2>
            <p style='color: #bfdbfe; margin: 6px 0 0;'>Someone just visited your portfolio!</p>
        </div>

        <div style='padding: 24px; background: #f8fafc;'>

            <table width='100%' style='border-collapse: collapse; margin-bottom: 20px;'>
                <tr>
                    <td style='padding: 12px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; width: 48%;'>
                        <div style='font-size: 12px; color: #64748b;'>PAGE VISITED</div>
                        <div style='font-size: 20px; font-weight: bold; color: #f15a24;'>{$page}</div>
                    </td>
                    <td style='width: 4%;'></td>
                    <td style='padding: 12px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; width: 48%;'>
                        <div style='font-size: 12px; color: #64748b;'>TOTAL VIEWS</div>
                        <div style='font-size: 20px; font-weight: bold; color: #2563eb;'>{$data['count']}</div>
                    </td>
                </tr>
            </table>

            <div style='background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 16px;'>
                <h3 style='margin: 0 0 12px; font-size: 13px; color: #475569; text-transform: uppercase; letter-spacing: 1px;'>Location</h3>
                <table width='100%'>
                    <tr><td style='padding:5px 0;color:#64748b;width:40%;'>Country</td><td style='font-weight:600;color:#1e293b;'>{$country}</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>Region</td><td style='font-weight:600;color:#1e293b;'>{$region}</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>City</td><td style='font-weight:600;color:#1e293b;'>{$city}</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>ISP</td><td style='font-weight:600;color:#1e293b;'>{$isp}</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>IP Address</td><td style='font-weight:600;color:#1e293b;'>{$ip}</td></tr>
                </table>
            </div>

            <div style='background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 16px;'>
                <h3 style='margin: 0 0 12px; font-size: 13px; color: #475569; text-transform: uppercase; letter-spacing: 1px;'>Device</h3>
                <table width='100%'>
                    <tr><td style='padding:5px 0;color:#64748b;width:40%;'>Device Type</td><td style='font-weight:600;color:#1e293b;'>{$device}</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>OS</td><td style='font-weight:600;color:#1e293b;'>{$os}</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>Browser</td><td style='font-weight:600;color:#1e293b;'>{$browserName}</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>Screen</td><td style='font-weight:600;color:#1e293b;'>{$screen}</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>Language</td><td style='font-weight:600;color:#1e293b;'>{$language}</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>Timezone</td><td style='font-weight:600;color:#1e293b;'>{$timezone}</td></tr>
                </table>
            </div>

            <div style='background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;'>
                <h3 style='margin: 0 0 12px; font-size: 13px; color: #475569; text-transform: uppercase; letter-spacing: 1px;'>Visit Info</h3>
                <table width='100%'>
                    <tr><td style='padding:5px 0;color:#64748b;width:40%;'>Time (UTC)</td><td style='font-weight:600;color:#1e293b;'>" . date('Y-m-d H:i:s') . "</td></tr>
                    <tr><td style='padding:5px 0;color:#64748b;'>Referrer</td><td style='font-weight:600;color:#1e293b;'>{$referrer}</td></tr>
                </table>
            </div>

        </div>

        <div style='background: #1e293b; padding: 14px; text-align: center;'>
            <p style='color: #94a3b8; margin: 0; font-size: 12px;'>Portfolio Tracker | monjurajad.com</p>
        </div>

    </div>";

    $mail->AltBody = "New visit on {$page} | {$country}, {$city} | IP: {$ip} | {$device} | {$os} | {$browserName} | Screen: {$screen} | Views: {$data['count']} | Time: " . date('Y-m-d H:i:s');

    $mail->send();
} catch (Exception $e) {}

echo json_encode(['views' => $data['count'], 'success' => true]);