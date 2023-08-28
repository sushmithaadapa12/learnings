<?php
$err=$name="";
if($_SERVER['REQUEST_METHOD']=="POST"){
    $name=$_POST['name2'];
    if(!empty($name)){
        echo 'your name is: '.$name;
    }else{
        $err="Please enter a valid name";
    }

}


?>
<form action="" method="POST">
name:
<input type="text" name="name2" id="" value="<?php echo $name; ?>">
<input type="submit" name="submit">
</form>
<?php echo $err;?>