<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add page</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>
<body>
    <div class="conatainer text-center my-4">
<h1>add new</h1>
</div>
    <div class="container">
        <div class="row">

        <div class="col-md-12 mt-4">

   
    <div class="card">
        <div class="card-header">
          <h3> card title
            <a href= "index.php" class= "btn btn-danger float-end">back to page</a> </h3> 
        </div>
        <div class="card-body">
           <form action="code.php" method = "post" >

           <div class="mb-3">
            <label for="name">Name</label>
            <input type="text" name = "name" class = "form-control" placeholder="Enter name">
            </div>

           <div class="mb-3">
            <label for="mail">E-mail</label>
            <input type="email" name = "mail" class = "form-control" placeholder="Enter Email">
            </div>

           <div class="mb-3">
            <label for="num">Number</label>
            <input type="text" name = "num" class = "form-control" placeholder="Enter number">
            </div>

           <div class="mb-3">
            <label for="address">Address</label>
            <input type="text" name = "address" class = "form-control" placeholder="Enter address">
            </div>

            <div class="mb-3">
                <input type = "submit" name = "submit" class = "btn btn-primary" value="Submit" />
            </div>
            
           </form>
        </div>

        </div>

        
    </div>
    </div>

    </div>

    
</body>
</html>