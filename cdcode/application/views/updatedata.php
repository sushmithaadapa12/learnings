<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js">
  </script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
   
    <h2 class = "text-center my-3" >Update Form</h2>

    <h2><?php
    //  echo $this->session->flashdata('item1'); 
     ?></h2>

    <div class="container d-flex justify-content-center my-3" style="min-height: 100vh;">
    <form action="<?php foreach($data as $r): echo base_url('/NewUser/updatedata?id='.$r->id); endforeach?>" method= "post" class="border bg-light shadow p-3 rounded" style="width:450px; height:400px;" >
        <div class = "form-group">
        <label for="name">Name:</label>
        <input type="text" name ="updatename" placeholder=" enter your name" class="form-control my-3" value = "<?php foreach($data as $r): echo $r->name; endforeach; ?>">
        </div>

        <div class = "form-group">
        <label for="name" >Email:</label>
        <input type="text" name ="updatemail" placeholder=" enter your mail" class="form-control my-3" value = "<?php foreach($data as $r): echo $r->mail; endforeach; ?>">
        </div>

        <div class = "form-group" >
        <label for="name" >Password:</label>
        <input type="text" name ="updatepsw" placeholder=" enter your password" class="form-control my-3" value = "<?php foreach($data as $r): echo $r->psw; endforeach; ?>">
        </div>



        <input type = "submit" name = "Update"  class = "btn btn-primary" value = "update">





    </form>
    </div>
</body>
</html>