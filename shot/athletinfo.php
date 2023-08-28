<?php
include('db.php');
if($_SERVER['REQUEST_METHOD']=="POST");{
$id=$_POST['id'];
$email=$_POST['email'];
do{
    if(empty($email)){
       break;
    }
    
    $sql="UPDATE users1 SET email='$email' WHERE id=$id";
    $result=$connection->query($sql);
    if(!$result){
        echo"error";
    }
    header('location:dashboard.php');
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
    <form action="" method="POST">
        <input type="hidden" name="id"  value="<?php echo $id ;?>">
        <!-- <div class=" w-auto mt-3 mb-3"> -->
            <label for="email"></label>
            <input type="text" name="email" class="form-control" id="em"  value="<?php echo $_GET['id'] ;?>" placeholder="Enter  your mail here"required>
            <button class='btn btn-primary' id="accept">accept</button>
    </form>
<!-- </div> -->

<script>

    alert('some one wants to follow u');
    $(document).ready(function(){
  $("#accept").click(function(){
    
  });
});

</script>


</body>
</html>