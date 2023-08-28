<?php
session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include("dbcon.php");

if(isset($_POST['update']))
{
    $user_id = $_POST['userid'];
    $name = $_POST['uname'];
    $email = $_POST['umail'];
    $number = $_POST['unum'];
    $address = $_POST['uaddress'];



    try 
    {

        $q = "update pdotb set name= :name,mail= :mail,num= :num,address=:address where id = :userid";

        $statement = $con->prepare($q);


        $data = [
            ":name" => $name,
            ":mail" => $email,
            ":num" => $number,
            ":address" =>$address,
            ":userid" => $user_id


        ];
        $result = $statement->execute($data);


        if($result)
        {
            // echo "<script> alert('sucessfully updated')</script>";

      $_SESSION["message"] = "updated sucessfully";
      header("location:index.php");

        }
        else 
        {
            echo "<script>alert('error in update')</script>";
        }
    



    }
    catch(Exception $e)
    {
        echo $e->getMessage();
    }


}

















if(isset($_POST['submit']))
{
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $number = $_POST['num'];
    $address = $_POST['address'];


    $query = "INSERT into pdotb(name,mail,num,address) VALUES(:name,:email,:number,:address)";

    $query_run= $con->prepare($query);

    $data = [
        ':name' =>$name,
        ':email' =>$email,
        ':number' =>$number,
        ':address' =>$address
    ];

    $query_result = $query_run->execute($data);

    if($query_result)
    {
        // echo "<script> alert('succesfully inserted')</script>";
      //  echo "successfully inserted";

      $_SESSION["message"] = "inserted sucessfully";
      header("location:index.php");
    }
    else
    {
        // echo "<script> alert('error in inserted')</script>";

        $_SESSION["message"] = "Error in inserted";
        header("location:index.php");
    }

}



?>