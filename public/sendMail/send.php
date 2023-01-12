<?php
$to = '<rinder500@gmail.com>';
$name = $_POST['name'];
$number = $_POST['phone'];
$email = $_POST['email'];
$country = $_POST['country'];
$comment = $_POST['comment'];
$email_subject = "Новая заявка с сайта kontrolit.by";
$email_body = "\nФИО: $name \nНомер телефона: $number\Email: $email \nСтрана: $country\nКомментарий: $comment";

$headers = "From: От кого письмо <circonconsulting@gmail.com>\r\n"; 
$headers .= "circonconsulting@gmail.com\r\n"; 

mail($to, $email_subject, $email_body, $headers);
// return echo $email_body 
?>