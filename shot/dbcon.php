<?php
 $connection = mysqli_connect('localhost','root','','check');
 // Check for database connection error
 if (!$connection)
 {
     echo "Connection error";
     exit;
 }
 ?>