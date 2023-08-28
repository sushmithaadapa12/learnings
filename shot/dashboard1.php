<?php  
session_start();
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js">
 </script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link rel="stylesheet" href="style.css">

<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></sc ript>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></sc ript>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></sc ript>
   <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css"> -->
   <script>
$(document).ready(function(){
        var athtype=$('.type').attr('id')
        console.log(athtype);
        
        if(athtype=="Athlet"){
            console.log("Hello")
            $('.Athlet').remove()
        }
        else{
            console.log("bye");
            $('.Fan').remove()

        }

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
<body style="text-black;">
<style>
    table{
        box-shadow: 0px 0px 3px rgb(95, 81, 81);
        text-align:center;
        padding:10px;
        margin:10x;
        width:40%;
        height:100hv;
        background-color:white;
        width:75vw;
        color:black;
    }
</style>
<nav class="navbar" style="background-color: #b10211;">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dswhesdgv/image/upload/v1664271705/istockphoto-637332860-612x612_rog3l6.jpg" width="50" height="50" class="nav" >
          </a>
          <h2 class="navhead"> The Sports Man</h2>
        </div>
    </nav>
    <div class="text-center" style="color:rgb(18, 238, 238); font-weight:bold;"> 
        <h1>WELCOME </h1> 
        <p id="fromUser"> <?php  echo $_SESSION['email']; ?></p>
        <p class="type" id="<?php echo $_SESSION['type']; ?>"> <?php echo $_SESSION['type']; ?> </p>
    </div>
<div class="d-flex flex-row justify-content-center">
     <div class="container">
            <h3>Users:</h3>
       <table >
            <thead>
                <tr style=" color:rgb(151, 146, 146); background-color:rgb(220, 230, 236); padding:10px; font-size:14px;">
                    <th> Id </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action </th>
                </tr>
            </thead>
            <tbody>
            <?php
                include('dbcon.php');
                $query="SELECT * FROM users1";
                $result= mysqli_query($connection,$query);
                // print_r($result);
                // print_r($result);exit;
                $i=1;
                // foreach($result = mysqli_fetch_all($result,MYSQLI_ASSOC) as $eachArray){
                    while($row = mysqli_fetch_assoc($result)) {
                        $eachArray  = $row;
                    $k=$i++;  
                    // $b=$eachArray[type];
                    
                //    foreach($eachArray as $rows =>$b){
                //     print_r($eachArray[type]);
                   
                //    exit;
                $a  = $eachArray['type']; 
                    if($a == "Athlet"){
                        echo"
                        <tr style='box-shadow: 0px 0px 1px rgb(95, 81, 81); margin:20px;'> 
                        <td > $k </td>
                        <td> $eachArray[name] </td>
                        <td>$eachArray[email]</td>
                        <td>
                        <input type='button' class='followButton Athlet' id=$eachArray[id] value='Follow'>
                        </td>
                        </tr>";
                    }else{
                        echo"
                        <tr style='box-shadow: 0px 0px 1px rgb(95, 81, 81); class=row'> 
                        <td> $k </td>
                        <td> $eachArray[name]  </td>
                        <td>$eachArray[email]</td>
                        <td>
                        <input type='button' class='followButton Fan' id=$eachArray[id] value='Follow'>
                        </td>
                        </tr>";
                    }
                }   
                ?>
            </tbody>
        </table>
        </div>
    </div>

        
    </body>
</html>
