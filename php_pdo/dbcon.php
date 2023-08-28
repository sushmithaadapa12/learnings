<?php

$servername = "localhost";
$username = "root";
$password = "";
$databasename = "pdodb";

try
{

    $con = new PDO("mysql:host=$servername;dbname=$databasename",$username,$password);
    $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    // echo "sucessfully connected";

}
catch(PDOException $e)
{
    echo "connection failed".$e ->getMessage();


}

?>