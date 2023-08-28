
<?php
include('taskdb.php');

$fullname = $email= $gender = $password = " ";

if($_SERVER['REQUEST_METHOD']=="POST"){
   $fullname=$_POST['fullname'];
   $email=$_POST['email'];
   $gender=$_POST['gender'];
   $password=$_POST['passwrd'];
   do{
       if(empty($fullname) || empty($email) || empty($gender) || empty($password)){
            break;
       }
        $query="INSERT INTO student (name,email,gender,password)
                VALUES ('$fullname', '$email', '$gender','$password')";
        $execute = mysqli_query($connection,$query);
        header('location:studentdp.php');
        exit;
        $fullname="";
        $email="";
        $gender="";
        $password="";
    }while(false);


      
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
  padding: 5%;
  background-image: url('./ll.jpg');
    }
 </style>
    </head>

<body>
<div class="container mt-3">
    <h2 style="text-align:center">NEW STUDENT REGISTRATION</H2>
    <form class="center" action="" method="POST">
        <div class=" mt-3 w-auto">
            <label for="firstname">Name:</label>
            <input type="text" name="fullname" class="form-control mt-2" id="fname" value="<?php echo $fullname;?> "placeholder="Enter your first name here " required>
        </div>
        <div class=" w-auto mt-3 mb-3">
            <label for="email">Email:</label>
            <input type="text" name="email" class="form-control" id="em" value="<?php echo $email;?> "placeholder="Enter  your mail here"required>
        </div>
        <div class=" w-auto">
                       <label for="gender">Gender:</label>
                       <input type="text" name="gender" class="form-control" value="<?php echo $gender;?> "placeholder="enter your gender" required>
                </div>
        <div class="mb-3 w-auto mt-3">
            <label for="firstname">Password:</label>
            <input type="text" name="passwrd" class="form-control" id="pd" value="<?php echo $password;?> "placeholder="Enter your password" required>
        </div>
        <button class="btn btn-primary" type="submit" name="submit" > submit</button>
        <a class="btn btn-primary" href="studentdp.php">cancel</a>

    </form>
</div>
</body>
</html>