<?php  
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js">
 </script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></sc ript>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></sc ript>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></sc ript>
   <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css"> -->
<script>
$(document).ready(function(){
    $(".followButton").click(function(){
    var state = $(this).val()
    if(state == "Requested")
    {
        $(this).val("Follow")
        

    }
    else{
        $(this).val("Requested")
        $.ajax({
            type: "POST",
            url: 'insertNotification.php',
            data: {
                "fromUser": $("#fromUser").text() ,
                "toUser": $(this).attr("id")
            },
            success: function(response)
            {
                var jsonData = JSON.parse(response);
  
                // user is logged in successfully in the back-end
                // let's redirect
                if (jsonData.success == "1")
                {
                    $(this).val("Requested")
                }
                else
                {
                    alert("please reload the")
                }
           }
       });
    }
    
  });
});
</script> 

</head>
 <style>
    .t{
    background-image: url('./1.jpg');
    background-size:cover;
  }
    table{
        box-shadow: 0px 0px 3px rgb(95, 81, 81);
        text-align:center;
        padding:10px;
        margin:10x;
        width:80vw;
        height:100vh;
    }
  </style>
<body>
<nav class="navbar" style="background-color: #b10211;">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dswhesdgv/image/upload/v1664271705/istockphoto-637332860-612x612_rog3l6.jpg" width="50" height="50" class="nav" >
          </a>
          <h2 class="navhead"> The Sports Man</h2>
        </div>
    </nav>
<h1>WELCOME </h1> <h1 id="fromUser"> <?php  echo $_SESSION['email']; ?></h1>
<div class="row ">
     <div class="container">
            <h3>athlets:</h3>
            <table class="table table-bordered table-hover border-dark mt-3">
                <thead>
                    <tr>
                        <th> Id </th>
                        <th>Name</th>
                        <th> Email </th>
                    </tr>
                </thead>
                <tbody>
                <?php
                    include('dbcon.php');
                    $query="SELECT * FROM users1";
                    $result= mysqli_query($connection,$query);
                    // print_r($result);
                    // print_r($result);exit;
                    foreach($result = mysqli_fetch_all($result,MYSQLI_ASSOC) as $eachArray){
                         
                        echo"
                            <tr>
                            <td>$eachArray[email]</td>
                            </tr>";


                    }
                    ?>
                </tbody>
             </table>
        </div>

        <div class="container">
            <h3>Fans:</h3>
            <table>
                <thead>
                    <tr>
                      <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                <?php
                    include('dbcon.php');
                    $query="SELECT * FROM users2";
                    $result= mysqli_query($connection,$query);
                    // print_r($result);
                    // print_r($result);exit;
                    foreach($result = mysqli_fetch_all($result,MYSQLI_ASSOC) as $eachArray){
                         
                        echo"
                            
                            <td>$eachArray[email]</td>
                            <td>
                                
                                <input type='button' class='followButton' id=$eachArray[id] value='Follow'>
                            </td>
                            </tr>";


                    } //<a class='btn btn-primary btn-sm' href='athletinfo.php?id=$eachArray[email]'>FOLLOW</a>
                    ?>
                </tbody>
             </table>
        </div>
    </div>

        
    </body>
</html>
