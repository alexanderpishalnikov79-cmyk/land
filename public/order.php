<?php
const API_URL = "https://tracker.rocketprofit.com/conversion/new";
const API_KEY = "570922";
$thanks = 'success.php';
$pixel= $_POST['pixel'];

$order = array (
    'campaign_id' => API_KEY,
    'name' => $_POST['name'],
    'phone' => $_POST['phone'],
    'sid1' => $_POST['sub7'],
    'sid2' => $_POST['sub2'],
    'sid3' => $_POST['sub3'],
    'sid4' => $_POST['sub4'],
    'sid5' => $_POST['subid'],
    'offerId' => API_KEY, // Добавляем offerId для логирования
);

// Define ip
if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
    $ip =  $_SERVER['HTTP_CF_CONNECTING_IP'];
}  elseif (!empty($_SERVER['HTTP_X_REAL_IP'])) {
    $ip =  $_SERVER['HTTP_X_REAL_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip =  $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip =  $_SERVER['REMOTE_ADDR'];
}

$order['ip'] = $ip;

$parsed_referer = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_QUERY);
parse_str($parsed_referer, $referer_query);

function orderlog($params, $response) {
    $date_today = date('Y-m-d');
    $log_filename = 'orderlog_' . $date_today . '.php';
    $date_now = date('Y-m-d H:i:s');

    $new_entry = "Offer id: {$params['offerId']}\nIP: {$params['ip']}\nDate: {$date_now}\nName: {$params['name']}\nPhone: {$params['phone']}\nResponse: " . json_encode($response) . "\n\n=====================\n\n";

    if (!file_exists($log_filename) || filesize($log_filename) == 0) {
        file_put_contents($log_filename, "<?php exit(\"Access Denied\"); ?>\n\n");
    }
    file_put_contents($log_filename, $new_entry, FILE_APPEND);
}

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://tracker.rocketprofit.com/conversion/new");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array_merge($referer_query, $order)));
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));

$result = curl_exec($ch);

// Исправляем: используем $result вместо $response и $order вместо $data
$jsonData = json_decode($result, true);
orderlog($order, $jsonData ? $jsonData : $result);

if ($result === false) { // Изменяем проверку
    echo "Timeout! RocketProfit API didn't respond within default period!";
} else {
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($httpCode === 200) {
        header('Location:'. $thanks.'?fpxl='.$pixel);
    } else if ($httpCode === 400) {
        echo "Order data is invalid! Order is not accepted!";
    } else {
        echo "Unknown error happened! Order is not accepted! Check campaign_id, probably no landing exists for your campaign!";
    }
}

curl_close($ch);
?>