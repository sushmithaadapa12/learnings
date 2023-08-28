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
          <div class="section1" style="padding:50px; border-radius:15px;">
              <h1>Login</h1>

              <form action="" method="POST">

               <div>
                  <label for="email" class="email">Email</label>
                  <input type="email" id="email" name="email" required  placeholder="please enter email" name="email" >
               </div>
               <div>
                  <label for="password" >Password</label>
                  <input type="password" id="password" required placeholder="please enter password" name="password">
               </div>
               
               <input type="submit" id="btn" value="Login" name="submit" class="button" />
               
               <p style="margin-top:15px;">New User please? <a href="reg.php">SignUp</a></p>

              </form>
              
          </div>

      </div>

      <?php
    include('dbcon.php');
    session_start();
        if(isset($_POST['submit'])){
            $email=$_POST['email'];
            echo $email;
            $password=$_POST['password'];

            if(!empty($email) && !empty($password)){
                $em="SELECT `type` FROM users1 WHERE email='$email' && password='$password'";
                $exe=mysqli_query($connection,$em);
                $rows= mysqli_num_rows($exe);
                $result = mysqli_fetch_all($exe,MYSQLI_ASSOC);
                print_r ($result[0]['type']);

                $query="SELECT `type` FROM `users1` WHERE `email`='rajiadapa@gmail.com';";
                $type=mysqli_query($connection,$query);
                

                $_SESSION['email'] =  $email;
                $_SESSION['type']=$result[0]['type'];

                if($rows>0){
                    header('location:dashboard1.php');

                }
                else{
                    
                    // header('location:login.php');
                    echo "<p class='text-center text-danger ' >Login not succesfull<p>";
                }

        }
        }
?>
</body>
</html>