<?php 
session_start();
include("dbcon.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index page</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>
<body>
    <div class="conatainer text-center my-4">
<h1>Pdo method</h1>
</div>
    <div class="container">
        <div class="row">

        <div class="col-md-12 mt-4">

        <?php if(isset($_SESSION['message'])): ?>
            <h4  class = "alert alert-success"><?php echo $_SESSION['message']; ?></h4>
            

        <?php 
        unset($_SESSION["message"]);
      endif; ?>

   
    <div class="card">
        <div class="card-header">
          <h3> PHP PDO CRUD
            <a href= "add.php" class= "btn btn-primary float-end">AddNew User</a> 
        </h3> 
        </div>
        <div class="card-body">

        <table class = "table table-boardered table-striped">
            <thead class = "font-weight-bold border">
                <td>S.no</td>
                <td>Name</td>
                <td>E-mail</td>
                <td>Number</td>
                <td>Adress</td>
                <td>Edit</td>
                <td>Delete</td>
            </thead>
            <tbody class = "border">

            <?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

            include("dbcon.php");
            $query = "select * from pdotb";
            $statement = $con->prepare($query);

           $statement->execute();

           $statement->setFetchMode(PDO::FETCH_OBJ);


           //or
           // $statement->setFetchMode(PDO::FETCH_ASSOC)  we can use  array formate $row[name];

           $result =$statement->fetchAll();

           if($result)
           {
             foreach($result as $row){
                echo "<tr>
                
                <td> $row->id </td>
                <td> $row->name</td>
                <td> $row->mail </td>
                <td> $row->num </td>
                <td> $row->address </td>
                <td><a href= 'update.php?uid=$row->id' name = 'update' class = 'btn btn-primary' >Update</a></td>
                <td><a href= 'delete.php?id=$row->id' name = 'delete' class = 'btn btn-danger' >Delete</a></td>

                



                </tr>
                
                ";

             }
           }
            ?>
               
            </tbody>
        </table>
          
        </div>

        </div>

        
    </div>
    </div>

    </div>

    
</body>
</html>