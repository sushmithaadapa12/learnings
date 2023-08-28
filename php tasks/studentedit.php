<?php
include('taskdb.php');
$fullname = $email= $gender = $password = "";
if($_SERVER['REQUEST_METHOD']=="GET"){
    if(!isset($_GET['id'])){
        header('location:studentdp.php');
        exit;
    }
   
    $id=$_GET['id'];
    $query="SELECT * FROM student WHERE id=$id";
    $result=$connection->query($query);
    $row=$result->fetch_assoc();
    if(!$row)
    {
        header('location:studentdp.php');
        exit;
    }
    $fullname=$row['name'];
    $email=$row['email'];
    $gender=$row['gender'];
    $password=$row['password'];
}
else{
     $id=$_POST['id'];
     $fullname=$_POST['fullname'];
     $email=$_POST['email'];
     $gender=$_POST['gender'];
     $password=$_POST['passwrd'];
   do{
        if(empty($fullname) || empty($email) || empty($gender) || empty($password)){
           break;
        }
        $sql="UPDATE student SET name= '$fullname',email='$email',gender='$gender',password='$password' WHERE id=$id";
        $result=$connection->query($sql);
        if(!$result){
            echo"error";
        }
        header('location:studentdp.php');
        exit;
    }while(true);
}
?>






<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js">
 </script>
 <style>
    .center {
  position: absolute;
  right:450;
  border:1px solid #000000;
  padding: 7%;
  background-image: url('./ll.jpg');
  }
 </style>
    </head>

<body>

<div class="container mt-3">
    <form class="center" action="" method="POST">
        <input type="hidden" name="id"  value="<?php echo $id ;?>">
        <div class=" mt-3 w-auto">
            <label for="firstname">Name:</label>
            <input type="text" name="fullname" class="form-control mt-2" id="fname"  value="<?php echo $fullname ;?>" placeholder="Enter your first name here " required>
        </div>
        <div class=" w-auto mt-3 mb-3">
            <label for="email">Email:</label>
            <input type="text" name="email" class="form-control" id="em"  value="<?php echo $email ;?>" placeholder="Enter  your mail here"required>
        </div>  
        <div class=" w-auto mt-3 mb-3">
            <label for="gender">Gender:</label>
            <input type="text" name="gender" class="form-control" id="em"  value="<?php echo $gender ;?>" placeholder="Enter  your gender here"required>
        </div>          

        <div class="mb-3 w-auto mt-3">
            <label for="firstname">Password:</label>
            <input type="text" name="passwrd" class="form-control" id="pd" value="<?php echo $password;?>" placeholder="Enter your password" required>
        </div>
        <button type="submit" name="submit" > submit</button>
    </form>
</div>
</body>
</html>