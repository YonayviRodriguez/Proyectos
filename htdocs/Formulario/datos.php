<?php 

//include 'conexion.php';

$Nombre = $_POST['Nombre'];
$Apellido = $_POST['Apellido'];
$Edad = $_POST['Edad'];
$Sexo = $_POST['Sexo'];
$Direccion = $_POST['Direccion'];
$Ciudad = $_POST['Ciudad'];
$Telefono = $_POST['Telefono'];
$Celular = $_POST['Celular'];
$Cedula = $_POST['Cedula'];
$Correo = $_POST['Correo'];


$NombreFamiliar = $_POST['NombreFamiliar'];
$Parentezco = $_POST['Parentezco'];
$Edadfamiliar = $_POST['Edadfamiliar'];
$message1 = $_POST['message1'];

$Enfermedad = $_POST['Enfermedad'];
$Tiempo = $_POST['Tiempo'];
$message2 = $_POST['message2'];

$FechaIng = $_POST['FechaIng'];
$fechaSal = $_POST['fechaSal'];
$centroMedico = $_POST['centroMedico'];
$message3 = $_POST['message3'];


$servername = "localhost";
$username = "id19018736_root";
$password = "E0JUQ49lVm+DAF&o";
$dbname = "id19018736_validar";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO datospersonales (Nombre, Apellido, Edad, Sexo, Direccion, Ciudad, Telefono, Celular, Cedula, Correo)
VALUES ('$Nombre','$Apellido','$Edad','$Sexo','$Direccion','$Ciudad','$Telefono','$Celular','$Cedula','$Correo');";
$sql .= "INSERT INTO familiar (NombreFamiliar, Parentezco, Edadfamiliar, message1)
VALUES ('$NombreFamiliar','$Parentezco','$Edadfamiliar','$message1');";
$sql .= "INSERT INTO enfermedades (Enfermedad, Tiempo, message2)
VALUES ('$Enfermedad','$Tiempo','$message2');";
$sql .= "INSERT INTO internamientos (FechaIng, fechaSal, centroMedico, message3)
VALUES ('$FechaIng','$fechaSal','$centroMedico','$message3')";

if ($conn->multi_query($sql) === TRUE) {
  echo "<h1>New records created successfully</h1>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>