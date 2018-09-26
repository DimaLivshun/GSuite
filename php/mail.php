<?php



header('Content-type: text/html; charset=utf-8');
error_reporting(0);

if(!empty($_POST['send'])) {

    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 300);
    $tel = substr(htmlspecialchars(trim($_POST['tel'])), 0, 100);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
    $lisence = substr(htmlspecialchars(trim($_POST['lisence_count'])), 0, 100);
    $price = substr(htmlspecialchars(trim($_POST['price'])), 0, 100);

    $ip = $_SERVER['REMOTE_ADDR'];


    $mess  = "Имя: <b>".$name."</b><br />";
    $mess .= "Телефон: <b>".$tel."</b><br />";
    $mess .= "Email: <b>".$email."</b><br />";
    $mess .= "Количество лицензий: <b>".$lisence."</b><br />";
    $mess .= "Цена: <b>".$price."</b><br />";


    mail("google@techsvit.eu", $theme, $mess, "From: GSuite \nContent-Type: text/html;\n charset=utf-8\nX-Priority: 0");

}
else {

    echo "<h2>Ошибка! Попробуйте еще раз.</h2>";

}








?>