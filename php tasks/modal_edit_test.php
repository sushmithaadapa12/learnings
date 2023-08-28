<?php
echo 'file opened';
if(isset($_POST['upload'])) {
   echo '<br>';
   echo '<br>';
   print_r($_FILES['file']);
   echo '<br>';
   echo '<br>';
$file_name = $_FILES['file']['name'];
$file_type = $_FILES['file']['type'];
$file_size = $_FILES['file']['size'];
$file_tem_Loc = $_FILES['file']['tmp_name'];
$file_store= "images/".$file_name; 
echo 'uploading';
move_uploaded_file($file_tem_Loc, $file_store);
}
?>

images