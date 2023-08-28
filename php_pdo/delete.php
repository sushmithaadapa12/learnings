<?php
session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


include("dbcon.php");

if(isset($_GET['id']))

{
 

    $userid = $_GET['id'];

    $q = "delete from pdotb where id = :userid";

    $run_query = $con->prepare($q);

    $data = [
        ":userid" => $userid
    ];

    $result = $run_query->execute($data);

    if($result)
    {

       // echo "<script>alert('record deleted')</script>";
       $_SESSION["message"] = "deleted sucessfully";
      
 
       header("location:index.php");


    }
    else 
    {
        echo "error in delete";

    }


}

?>