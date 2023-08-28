<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style> 
        .container{
            background-color:darkslategray;
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding:10px;
            border-radius:20px;
        }
        .input{
            margin:10px;
            padding:10px;
            border-radius:10px;
        }
        .containerN{
            background-color:white;
            padding:10px;
            margin-left:400px;
            margin-right:400px;
            margin-top:40px;
        }
        .opconn{
            background-color:blue;
            border-radius:10px;
            padding:10px;
            margin:20px;
        }
    </style>
</head>
<body>

    <div class="containerN">
        <div class="container">
            <form method="POST" action="">
                <h1 style="text-align:center; color:white;"> My Calculator </h1>
                Number 1:<input type="text" placeholder="please enter any number" name="number1" class="input"/>
                <br>
                Number 2:<input type="text" placeholder="please enter any number" name="number2" class="input" />
                <div class="container"> 
                    <input type="submit" class="input" name="calculate" value="Add"/>
                    <input type="submit" class="input" name="calculate" value="Sub"/>
                    <input type="submit" class="input" name="calculate" value="Mul"/>
                    <input type="submit" class="input" name="calculate" value="Div"/>
                </div>

            </form>
        </div>
        <?php
            ini_set('display_errors',0);
            $res="";
            if (isset($_REQUEST["calculate"])){
            
                $operator=$_POST['calculate'];
                
                $n1 = $_POST['number1'];

                $n2 = $_POST['number2'];
                
                if($operator=="Add")
                {
                $res= $n1+$n2;
                }
                if($operator=="Sub")
                {
                $res= $n1-$n2;
                }
                if($operator=="Mul")
                {
                $res =$n1*$n2;
                }
                if($operator=="Div")
                {
                $res= $n1/$n2;
                }
            }
            ?>

            <div class="opconn">
                My Output: <?php echo $res ?>        
            </div>
    </div>
</body>
</html>