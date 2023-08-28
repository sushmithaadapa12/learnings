<?php  
             $connection = mysqli_connect('localhost','root','','check');

             $fromUser = $_POST['fromUser'];
             $toUser = $_POST['toUser'];


             $sql="INSERT INTO `notification`( `fromUser`, `toUser`, `request`, `accept`)
             VALUES  ( '$fromUser', '$toUser','yes','no' )  ";

            $query=mysqli_query($connection,$sql);

            if($query){
                echo json_encode(array("success" => 1));exit;

            }
            else{
                echo json_encode(array("success" => 0)); exit;

            }












echo json_encode(array("success" => 1));



?>