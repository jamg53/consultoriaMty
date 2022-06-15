<?php



$conexion = mysqli_connect("localhost", "root", "", "xpress");

if($conexion){

    echo "Conectado exitosamente.";

}else{

    echo "No se pudo conectar.";
}
 

?>