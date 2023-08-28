
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js">
 </script>
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></sc ript>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></sc ript>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></sc ript>
   <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css"> -->
 </head>
 <style>
  </style>
<body>
      <div class="container my-5">
            <h2>STUDENT DETAILS</h2>
            <a class="btn btn-primary" href="studentdt.php" role="button">ADDING</a>
            <table class="table table-bordered table-hover border-dark mt-3">
                <thead>
                    <tr>
                      <th >ID</th>
                      <th >NAME</th>
                      <th >EMAIL</th>
                      <th >GENDER</th>
                      <th>PASSWORD</th>
                      <th>ACTION</th>     
                    </tr>
                </thead>
                <tbody>
                    <?php
                    include('taskdb.php');
                    $query="SELECT * FROM student";
                    $result=$connection->query($query);
                    while($rows=$result->fetch_assoc())
                    { 
                        echo"
                
                            <tr>
                            <td>$rows[id]</td>
                            <td>$rows[name]</td>
                            <td>$rows[email]</td>
                            <td>$rows[gender]</td>
                            <td>$rows[password]</td>
                            <td>
                                <a class='btn btn-primary btn-sm' href='studentedit.php?id=$rows[id]'>EDIT</a>
                                <a class='btn btn-danger btn-sm' href='studentdelete.php?id=$rows[id]'>DELETE</a>
                            </td>
                            </tr>";
                    }
                    ?>
                </tbody>
             </table>
        </div>
    </body>
</html>













































     