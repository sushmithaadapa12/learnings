<?php
include('taskdb.php');
if(isset($_GET['id'])){
 $id=$_GET['id'];
 $del="DELETE FROM student WHERE id=$id";
 $connection->query($del);

}
header('location:studentdp.php');
exit;
?>
