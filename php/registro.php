


<?php

include '../php/conexion.php';

$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$usuario = $_POST['usuario'];
$password = $_POST['password'];


$query = "INSERT INTO usuarios(nombre, usuario, email, contraseña) 
            VALUES('$nombre','$correo' ,'$usuario' , '$password')";

$ejecutar = mysqli_query($conn, $query);

if($ejecutar){
    
    echo '<script>
    
    alert("Usuario registrado");

    
    </script>';
    
}


?>




