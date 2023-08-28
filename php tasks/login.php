<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome icones CDN Link -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <title>Sign Up</title>
    <!-- Linking css code file -->
    <link rel="stylesheet" href="style1.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

</head>
<body>
    
    <div class="container">
        <div class="section1">
            <h1>Log in</h1>
            <h5>Welcome to our Org </h5>
            <form action="" method="POST">
             <div class="formgroup">
                <p><label for="email">Email</label></p>
                <input type="email" id="email" name="email" required placeholder="please enter your email " name="email" >
             </div>
             <div class="formgroup">
                <p><label for="userNmae">Password</label></p>
                <input type="password" id="password" required placeholder="please enter your password" name="password" required >
             </div>
             <input type="submit" id="btn" name="submit" value="Login">
             <p>Not a register user? <a href="signup.php">Sign Up</a></p>
             
            </form>
            
        </div>
        
        <div> 
            <img src="https://res.cloudinary.com/dswhesdgv/image/upload/v1663750137/pexels-photo-3184360_dhhxx0.jpg" alt="Music Image">
        </div>
            
    </div>
    <?php
    require "vendor/autoload.php"; //for working php library
    ?>
    <div style="background-color:aliceblue; height:1000px;"> 

    <?php 
        $client =  new MongoDB\Client('mongodb://localhost:27017'); // connecting php to mongodb
        $collection = $client->mongophp->testing;  //creating db and collection

            if (isset($_POST["submit"])){
                
                $loginemail=$_POST["email"];
                $password=$_POST["password"];

                
                $result = $collection->find(["email"->$loginemail]);
                
                
               foreach($result as $a){
                var_dump(json_encode($a->name));
               }
                
            }
        ?>    
    </div>
</body>
</html>