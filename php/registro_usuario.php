<?php

include 'conexcion.php';

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$correo = $_POST['email'];
$password = $_POST['passoword'];


$query = "INSERT INTO usuarios(nombre, apellido, email, contraseña) 
            VALUES('$nombre', '$apellidos', '$correo', '$password')";

$ejecutar = msqli_query($conexion, $query);

if(!$ejecutar){

    echo "No se pudo registrar";

}else{

    echo "Correcto";

}


?>