<?php



$a =  $_GET ;

print_r($a);
echo '<br>';
print_r ($a['id']);

$conn = mysqli_connect('localhost','root','','Training');
$query = "SELECT Name FROM `task1_formlogin` ";
$execute = mysqli_query($conn,$query);
$a= mysqli_fetch_all($execute, MYSQLI_ASSOC);
print_r($a);
?>