<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];


	//Ниже вставить свою почту
	$to = "ivanovroc@gmail.com"; 
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name 
    Телефон: $phone 
    Почта: $email";

	mail($to, $subject, $msg, "From: $from ");
?>