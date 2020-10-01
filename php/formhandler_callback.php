<?php
$to = "mail@feleton.com";
$subject = "Заказан обратный звонок";
$headers = "From: message@feleton.com";

if (

    isset($_POST["name"]) && 
    isset($_POST["phone"]) 
    
) { 
    
    // Формируем массив для JSON ответа
    $result = array(
        'Имя' => $_POST["name"],
        'Телефон' => $_POST["phone"]      
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 

    foreach ($result as $key => $value) {
        $txt_for_mail .= $key . ": " . $value ."\n";
    }

    mail($to, $subject, $txt_for_mail, $headers);

}
?>