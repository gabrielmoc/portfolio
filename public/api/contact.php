<?php
// This endpoint is executed by PHP on the hosting server, never by Vite.
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, string $code): void
{
    http_response_code($status);
    echo json_encode(['ok' => $status === 200, 'code' => $code]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'method_not_allowed');
}
if (strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0])) !== 'application/json') {
    respond(415, 'invalid_request');
}
$raw = file_get_contents('php://input', false, null, 0, 24001);
if ($raw === false || strlen($raw) > 24000) {
    respond(413, 'invalid_request');
}
try {
    $data = json_decode($raw, true, 8, JSON_THROW_ON_ERROR);
} catch (Throwable $error) {
    respond(400, 'invalid_request');
}
if (!is_array($data)) {
    respond(400, 'invalid_request');
}

$fields = ['name' => 120, 'email' => 254, 'phone' => 40, 'message' => 5000, 'website' => 200];
foreach ($fields as $field => $limit) {
    $value = $data[$field] ?? '';
    if (!is_string($value) || !preg_match('//u', $value)) {
        respond(422, 'invalid_fields');
    }
    $data[$field] = trim($value);
    if (preg_match_all('/./us', $value) > $limit || strpos($value, "\0") !== false) {
        respond(422, 'invalid_fields');
    }
}
if ($data['website'] !== '') {
    respond(422, 'invalid_fields');
}
if ($data['name'] === '' || $data['message'] === '' ||
    !filter_var($data['email'], FILTER_VALIDATE_EMAIL) ||
    !preg_match('/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/D', $data['phone']) ||
    preg_match('/[\r\n]/', $data['name'] . $data['email'] . $data['phone'])) {
    respond(422, 'invalid_fields');
}

// In production: /domain/portfolio-mail, a sibling of /domain/public_html.
$privateDirectory = getenv('PORTFOLIO_MAIL_DIR') ?: dirname(__DIR__, 2) . '/portfolio-mail';
$configPath = $privateDirectory . '/config.php';
if (!is_file($configPath)) {
    respond(503, 'unavailable');
}
try {
    $config = require $configPath;
    if (!is_array($config) || empty($config['password']) ||
        !filter_var($config['username'] ?? '', FILTER_VALIDATE_EMAIL) ||
        !filter_var($config['recipient'] ?? '', FILTER_VALIDATE_EMAIL)) {
        respond(503, 'unavailable');
    }
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (!in_array($origin, $config['allowed_origins'] ?? [], true)) {
        respond(403, 'invalid_request');
    }

    // A locked, private ledger limits both individual IPs and total SMTP attempts.
    $ledger = fopen($privateDirectory . '/rate-limit.json', 'c+');
    if ($ledger === false || !flock($ledger, LOCK_EX)) {
        throw new RuntimeException('Rate limiter unavailable');
    }
    $state = json_decode(stream_get_contents($ledger) ?: '{}', true) ?: [];
    $now = time();
    foreach ($state as $key => $attempts) {
        $state[$key] = array_values(array_filter($attempts, static function ($at) use ($now) {
            return is_int($at) && $at > $now - 3600;
        }));
        if (!$state[$key]) {
            unset($state[$key]);
        }
    }
    // Do not trust caller-controlled X-Forwarded-For headers.
    $client = hash_hmac('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown', $config['password']);
    $recent = array_filter($state[$client] ?? [], static function ($at) use ($now) {
        return $at > $now - 900;
    });
    if (count($recent) >= 5 || count($state['global'] ?? []) >= 50) {
        flock($ledger, LOCK_UN);
        fclose($ledger);
        header('Retry-After: 900');
        respond(429, 'rate_limited');
    }
    $state[$client][] = $now;
    $state['global'][] = $now;
    rewind($ledger);
    if (!ftruncate($ledger, 0) || fwrite($ledger, json_encode($state)) === false || !fflush($ledger)) {
        throw new RuntimeException('Rate limiter write failed');
    }
    flock($ledger, LOCK_UN);
    fclose($ledger);

    require_once $privateDirectory . '/PHPMailer/Exception.php';
    require_once $privateDirectory . '/PHPMailer/PHPMailer.php';
    require_once $privateDirectory . '/PHPMailer/SMTP.php';
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->SMTPAuth = true;
    $mail->Username = $config['username'];
    $mail->Password = str_replace(' ', '', $config['password']);
    $mail->Timeout = 15;
    $mail->Timelimit = 20;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->setFrom($config['username'], 'Portfolio - Gabriel Cavalcanti');
    $mail->addAddress($config['recipient']);
    $mail->addReplyTo($data['email'], $data['name']);
    $mail->Subject = 'Novo contato pelo portfolio';
    $mail->isHTML(false);
    $mail->Body = "Nome: {$data['name']}\nE-mail: {$data['email']}\nCelular: {$data['phone']}\n\nMensagem:\n{$data['message']}";
    $mail->send();
    respond(200, 'sent');
} catch (Throwable $error) {
    // Never return SMTP diagnostics, credentials or visitor data to the browser.
    error_log('Portfolio contact: mail service failed (' . get_class($error) . ')');
    respond(503, 'unavailable');
}
