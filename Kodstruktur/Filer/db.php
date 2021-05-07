<?php

$db = json_decode(file_get_contents("php://input"), true);
$data = $db["data"];
$name = $db["name"];

file_put_contents("$name.json", json_encode($data, JSON_PRETTY_PRINT));


send(200, $data);


function send($code, $data, $message = "", $header = "Content-Type: text/plain"){
    http_response_code($code);
    header($header);
    echo json_encode([
        "data" => $data,
        "message" => $message,
        "elapsed" => microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"]
        ]);

    global $lockFile;
    if (file_exists($lockFile)) {
        unlink($lockFile);
    }

    exit();
}

?>