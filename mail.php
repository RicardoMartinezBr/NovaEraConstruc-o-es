<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['phone']))
$phone = $_POST['phone'];
if(isset( $_POST['cidade']))
$cidade = $_POST['cidade'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];

$content="From: $name \n Email: $email \n Telefone: $phone \n Cidade: $cidade \n Message: $message";
$recipient = "marketing4peers@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
header("Location: https://www.marketing4peers.com/thank-you.php");
?>
