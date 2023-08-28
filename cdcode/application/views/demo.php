
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>demo page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js">
  </script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link ref= "https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css"></script>
  <script src= "https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>

    <style>
/* #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: gray;
  color: white;
} */
</style>
<script>
  $(document).ready( function () {
    $('#customers').DataTable();
} );
</script>
</head>
<body>
    <h1  class = "text-center my-3"> fetch data using codeignator </h1>


<div class = "container d-flex justify-container-center my-3">
<table id="customers"  class="table my-3">
    <tr>
      <th>s.no</th>
      <th>name</th>
      <th>mail</th>
      <th>password</th>
      <th>update</th>
      <th>delete</th>



      
     
    </tr>
    <tbody>
     <?php


//   $i=1;
//   foreach($citb as $row)
//   {
//   echo "<tr>";
//   echo "<td>".$i."</td>";
//   echo "<td>".$row->name."</td>";
//   echo "<td>".$row->mail."</td>";
//   echo "<td>".$row->psw."</td>";
//   echo '<button type = "button" class = "btn btn-primary" ><a href = "update.php">update</a></button>
//   <button type = "button" class = "btn btn-primary" ><a href = "update.php">update</a></button>';
//   echo "</tr>";

//   $i++;
// }


?> 

<?php foreach($citb as $row): ?>

  <tr>
<td><?php echo $row->id; ?> </td>
<td><?php echo $row->name; ?> </td>
<td><?php echo $row->mail; ?> </td>
<td><?php echo $row->psw; ?> </td>
<td>
  <a href = "<?php echo base_url('/NewUser/getdata?id='.$row->id) ?> " class = "btn btn-primary" name = "update">Update</a>
</td>
<td>
  <a href = "<?php echo base_url('/NewUser/delete_user?id='.$row->id) ?>" class = "btn btn-danger" name = "delete">Delete</a>
</td>
</tr>
 
<?php endforeach; ?>









 




 




</tbody>

</table>
</div>
<div class="container my-3 text-center">
<a href = "register" style = "text-align:center;">logout</a>
</div>


</body>
</html>
