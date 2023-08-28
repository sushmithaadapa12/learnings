<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>update page</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>
<body>
    <div class="conatainer text-center my-4">
<h1>Update Form</h1>
</div>
    <div class="container">
        <div class="row">

        <div class="col-md-12 mt-4">

   
    <div class="card">
        <div class="card-header">
          <h3> Update Card
            <a href= "index.php" class= "btn btn-danger float-end">cancel</a> </h3> 
        </div>
        <div class="card-body">

        <?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include("dbcon.php");


    if(isset($_GET["uid"]))
    {

        $userid = $_GET['uid'];


        $query = "select * from pdotb where id = :user_id";

        $query_run = $con->prepare($query);

        $data = [
            ":user_id"=>$userid
        ];
        
        $query_run->execute($data);

        $result = $query_run->fetch(PDO::FETCH_OBJ);
        
    }

    ?>
           <form action="code.php" method = "post" >
            <input type="hidden" name = "userid" value = "<?php echo $result->id; ?>">

           <div class="mb-3">
            <label for="name">Name</label>
            <input type="text" name = "uname" class = "form-control" value="<?php echo $result->name; ?>">
            </div>

           <div class="mb-3">
            <label for="mail">E-mail</label>
            <input type="email" name = "umail" class = "form-control" value="<?php echo $result->mail; ?>">
            </div>

           <div class="mb-3">
            <label for="num">Number</label>
            <input type="text" name = "unum" class = "form-control" value="<?php echo $result->num; ?>">
            </div>

           <div class="mb-3">
            <label for="address">Address</label>
            <input type="text" name = "uaddress" class = "form-control" value="<?php echo $result->address; ?>">
            </div>

            <div class="mb-3">
                <input type = "submit" name = "update" class = "btn btn-primary" value="Update" />
            </div>
            
           </form>
        </div>

        </div>

        
    </div>
    </div>

    </div>

    


    
</body>
</html>