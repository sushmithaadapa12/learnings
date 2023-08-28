<?php
defined('BASEPATH') or exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>signup page</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js">
  </script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</head>

<body>
  <h1 style="color:aqua;text-align:center;"> signup </h1>
  <!-- <?php //echo form  _open('User'); 
        ?> -->


  <h2><?php
      //  echo $this->session->flashdata('item'); 
      ?></h2>




  <div class="container d-flex justify-content-center my-3" style="min-height: 100vh;">
    <form action="<?php echo base_url() . 'NewUser/register'; ?>" method="post" class="border bg-light shadow p-3 rounded" style="width:450px; height:400px;">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder=" enter your name" class="form-control my-3">
      </div>

      <div class="form-group">
        <label for="name">Email:</label>
        <input type="text" name="mail" placeholder=" enter your mail" class="form-control my-3">
      </div>

      <div class="form-group">
        <label for="name">Password:</label>
        <input type="text" name="psw" placeholder=" enter your password" class="form-control my-3">
      </div>



      <input type="submit" name="submit" class="btn btn-primary" value="Submit">





    </form>
  </div>








</body>

</html>