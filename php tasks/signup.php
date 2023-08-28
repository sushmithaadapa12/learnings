<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome 5 CDN link to add icones -->
    <script src="https://kit.fontawesome.com/2a9e17dbf7.js" crossorigin="anonymous"></script>
    <title>Sign Up</title>
    <!-- Linking .css file with HTML page -->
    <link rel="stylesheet" href="style1.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
</head>

<body>

    <?php 
    ?>
    <div class="container">
        
        <!-- Left section of signup form -->
        <div class="section1">
            <h1>Sign Up</h1>
            <h5>Welcome to our Org</h5>
            <form action="" method="POST">
             <div class="formGroup ">
                <p><label for="userNmae">User Name</label></p>
                <input type="text" id="userName" autocomplete="off" placeholder="please enter name" required name="username" >
             </div>
             <div class="formGroup">
                <p><label for="email">Email Address</label></p>
                <input type="email" id="email" name="email" required autocomplete="off" placeholder="please enter email" name="email" >
             </div>
             <div class="formGroup">
                <p><label for="password">Password</label></p>
                <input type="password" id="password" required placeholder="please enter password" name="password">
             </div>
             <input type="submit" id="btn" value="Signup" name="submit" />
             <p style="margin-top:15px;">Already a member? <a href="login.php">Log in</a></p>
            </form>
            
        </div>
        <div class="section2"> 
            <img src="https://res.cloudinary.com/dswhesdgv/image/upload/v1663750137/pexels-photo-3184360_dhhxx0.jpg" alt="Music Image">
        </div>
    </div>
    <?php
    require "vendor/autoload.php"; //for working php library
    ?>
    
    <?php 
    $client =  new MongoDB\Client('mongodb://localhost:27017');  // connecting php to mongodb 
    $collection = $client->mongophp->testing; 
        if (isset($_POST["submit"])){
            $name=$_POST["username"];
            $email=$_POST["email"];
            $password=$_POST["password"];
            // echo $name,$email,$password;
            //creating db and collection
            $result = $collection->insertOne(['name' => $name,'email' => $email,'password'=>$password]);
            if($result){
                header('location: login.php?name');
            }
        }

        
    ?>
</body>
</html>