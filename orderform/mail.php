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

  //if (filter_var($email, FILTER_VALIDATE_EMAIL)){
    //$email = $emailTested;
    $resultMail = mail($emailTested, $theme, $message);
  //};

  

  //$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
  //header("Location: $redirect");
  //exit();
  //header('Refresh: 1; URL='.$_SERVER['HTTP_REFERER']);
//header('Location: http://orderform/popup.html');


  ?>

