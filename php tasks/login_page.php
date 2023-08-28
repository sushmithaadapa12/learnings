<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 
    <?php
    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $dbname = "Training";

    // $conn = new mysqli($servername, $username, $password, $dbname);
    //     if (!$con) 
	// 	{
	// 		echo "Connection error";exit;
	// 	}
    //     echo "success";
    $name = $email = "";
    if(isset($_POST['login']))
    {
        
        $name = $_POST['name'];
        $email = $_POST['email'];

    }
    ?>
    <div>
        <h3>Login page</h3>
        <form action="" method="post">
            <input type="text" name="name" id="" placeholder="Name...." required>
            <input type="email" name="email" id="" placeholder="Email..." required>
            <button type="submit" name="login">login</button>
        </form>
        <?php
        echo $name;
        echo $email;
        ?>
    </div>
    <?php 
    include(db.php);
    echo $s; ?>
</body>
</html>