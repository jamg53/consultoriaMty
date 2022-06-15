<?php
$host ="localhost";
$user ="id18748300_admin";
$password ="Administrador_cocos2022";
$base = "id18748300_consulmty";



$conn = mysqli_connect($host, $user, $password, $base) or die(mysql_error($mysql));

if(!$conn){

    echo"No se pudo conectar";

}else{

    echo"Ya se conecto";

}

insertar($conn);


function insertar($conn){

	$nombre = $_POST['nombre'];
$contraseña = $_POST['password'];

$insercion = "INSERT INTO persona(nombrePersona, passwordPersona) VALUES('$nombre', '$contraseña');";
mysqli_query($conn, $insercion);
mysqli_close($conn);

}
?>