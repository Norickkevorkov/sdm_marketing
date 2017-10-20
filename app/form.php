<?php
$isErrors = false;
$formName = 'сдм-маркетинг.рф';
$name = $_POST['name'];
$tel = $_POST['phone'];
$email = htmlspecialchars(trim($_POST['email']), ENT_QUOTES);
$site_address = $_POST['site'];
$clients_count = $_POST['clients_count'];
$business = $_POST['business'];
function validatePhone($phoneNo){
//    return preg_match('/\(?\d{3}\)?[-\s.]?\d{3}
//        [-\s.]\d{4}/x', $phoneNo);
    return preg_match('/^(\+7\(\d{3}\)\d{7}+$/', $phoneNo);
}
if(!empty($_POST['phone'])) {
    $tel = htmlspecialchars(trim($_POST['tel']), ENT_QUOTES);
    if(empty($tel)){
        $isErrors = true;
    }
    if(!preg_match("/\+7\([\d]{3}\)[\d]{7}/", $tel)){
        $isErrors = true;
    }
} else {
    $isErrors = true;
}
if(!empty($_POST['name'])) {
    $name = htmlspecialchars(trim($_POST['name']), ENT_QUOTES);
    if(empty($name)){
        $isErrors = true;
    }
} else {
    $isErrors = true;
}


echo json_encode($isErrors);
if(!$isErrors){
    $to  = "<info@sitedoesmatter.ru>" ;
    $from = 'сдм-маркетинг.рф';
    $subject = $_POST["pageTitle"];


    $message = ' <p>Имя клиента: '.$name.'</p> </br> Номер телефона: <p>'.$tel.'</p></br><p>'.$email.'</p></br><p>'.$_POST["pageTitle"].'</p>';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= "From: ".$from." <info@sitedoesmatter.ru>\n";
    $headers .= "Subject: {$subject}". "\r\n";

    mail($to, $subject, $message, $headers);

}else{
    die();
}

