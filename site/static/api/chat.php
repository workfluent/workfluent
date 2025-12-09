<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
$userMessage = $input['message'] ?? '';

if (empty($userMessage)) {
    echo json_encode(["error" => "No message provided"]);
    exit;
}

// !!! IMPORTANT: REPLACE THIS WITH YOUR ACTUAL OPENAI API KEY !!!
$apiKey = "sk-YOUR-OPENAI-API-KEY-HERE"; 

$data = [
    "model" => "gpt-3.5-turbo",
    "messages" => [
        [
            "role" => "system",
            "content" => "You are a helpful assistant for Workfluent, a recruitment agency connecting top talent with companies. Be professional, concise, and helpful."
        ],
        [
            "role" => "user",
            "content" => $userMessage
        ]
    ]
];

$ch = curl_init("https://api.openai.com/v1/chat/completions");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $apiKey
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo json_encode(["error" => curl_error($ch)]);
} else {
    echo $response;
}

curl_close($ch);
?>