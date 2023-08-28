<!DOCTYPE html>
<html lang="en">
<head>
    
    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>showoff task</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- Navbar Don't touch -->
    <nav class="navbar" style="background-color: #b10211;">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dswhesdgv/image/upload/v1664271705/istockphoto-637332860-612x612_rog3l6.jpg" width="50" height="50" class="nav" >
          </a>
          <h2 class="navhead"> The Sports Man</h2>
        </div>
    </nav>
    
      <div>
          <div class="section1" style=" border-radius:15px;">
              <h1>Sign Up</h1>

              <form action="" method="POST">

               <div >
                  <label for="userName" class= "mr-3">Username</label>
                  <input type="text" id="userName"  placeholder="please enter name" required name="username" >
               </div>
               <div>
                  <label for="email" class="email">Email  </label>
                  <input type="email" id="email" name="email"  placeholder="please enter email" name="email" >
               </div>
               <div>
                  <label for="password" >Password</label>
                  <input type="password" id="password" required placeholder="please enter password" name="password">
               </div>
               <div>
                  <label for="phonenumber" >phonenumber</label>
                  <input type="text" id="password" required placeholder="please enter phonenumber" name="phonenumber">
               </div>
               <div>
                    <label class="radio"> User type </label> 
                    <input type="radio" value="Fan" name="type" id="fan"/> 
                    <label for="fan" > User </label>
                    <input type="radio" value="Athlet" name="type" id="athelete"/> 
                    <label for="athelete" > Athelete </label>
               </div>
               <input type="submit" id="btn" value="Signup" name="submit" class="button" />
               
               <p style="margin-top:15px;">Already a member? <a href="login.php">Log in</a></p>

              </form>
              
          </div>

      </div>
      <?php
      
      if (isset($_POST["submit"])){
          $name=$_POST['username'];
          $email=$_POST['email'];
          $password=$_POST['password'];
          $type=$_POST['type'];
          echo $type;
          $phonenumber=$_POST['phonenumber'];
  
      require ("dbcon.php");
  
      if(empty($name) || empty($email)|| empty($password) || empty($type) || empty($phonenumber)){
          echo "Please enter valid values";
      }
      else{

            $sql="INSERT INTO users1(name,email,phonenumber,type,password) VALUES ('$name','$email','$phonenumber','$type','$password')";
            $query=mysqli_query($connection,$sql);
            if($query){
                echo "signup Succesfull";
            }
            header('location:login.php');
      }
      }
      ?>
</body>
</html>