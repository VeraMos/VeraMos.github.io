<?php 

  $width = $_POST['width'];
  $height = $_POST['height'];
  $material = $_POST['material'];

  $username = $_POST['username'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $num = 2563;

  $theme = "тестовое задание, заказ забора №" . $num;
  $message = $username . ", заказ №" . $num . " сформирован. В ближайшее время наш специалист свяжется с вами по телефону " . $phone . ".";

  $resultMail = mail($email, $theme, $message);
?>

