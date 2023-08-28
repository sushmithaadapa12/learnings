<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style> 
    .formcon{
        background-image:url("");
        background-size:cover;      
    }
</style>
<body>
    
    <div>
        <form method="POST" action="">
            <input type="text" name="text" id="userInput" placeholder="Enter Some Text">
            <input type="email" name="email" id="" placeholder="enter email here">
            <input type="submit" value="Save" name="submit">
        </form>
    </div>
</body>
</html>

<?php
    require "vendor/autoload.php"; //for working php library
?>

<?php

   $client =  new MongoDB\Client('mongodb://localhost:27017');  // connecting php to mongodb
   if ($client){
       echo "connection success"."<br>";
   }
   if(isset($_POST['submit'])){
       $text = $_POST['text'];
       $email = $_POST['email'];
       echo $text;
       echo $email;
       
       $collection = $client->mongophp->testing;  //creating db and collection
       $result = $collection->insertMany([['newText' => $text,'email' => $email],['newText' => $text,'email' => $email]]);
       printf("Inserted %d document(s)\n", $result->getInsertedCount());
       var_dump($result->getInsertedIds());
   }
   else{
       echo "error";
   }
   
?>   