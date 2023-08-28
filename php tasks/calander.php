<!DOCTYPE html>
<html>
  
<head>
    <title>August 2021</title>
  
    <style>
        table {
            background-color: yellow;
        }
  
        td {
            width: 40px;
            height: 40px;
            text-align: center;
        }
  
        .day {
            font-weight: bolder;
            background-color: lightpink;
        }
  
        .holiday {
            background-color: lightblue;
        }
  
        #field {
            font-weight: bolder;
            text-align: center;
        }
    </style>
  
  
</head>
  
<body>
    <table align="center" border="1">
        <tr>
            <td colspan="7"><b>August 2021</b></td>
        </tr>
  
        <tr class="day">
            <td>Sun</td>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
        </tr>
        <script type="text/javascript">
        function show(a) {
            document.getElementById('field').innerHTML
                = document.getElementById(a.id)
                .attributes["name"].value;
  
            setTimeout(function () {
                document.getElementById('field').innerHTML = "";
            }, 5000);
        }
    </script>
    
        <?php
            $holidays = array(
                15 => "Independence Day", 
                19 => "Muharram", 
                21 => "Onam", 
                22 => "Raksha Bandhan", 
                30 => "Janmashtami"
            );
   
            for($i = 1; $i <= 31; $i++) {
                if (in_array($i, array_keys($holidays))) {
                    $x = $holidays[$i];
                echo "<td class = holiday id='$i'name ='$x' onmouseover = show(this)>$i</td>";
                } else {
                    echo "<td id =$i onclick=''> $i </td>";
                }
   
                if($i % 7 == 0) {
                    echo "</tr><tr>";
                }
            }
        ?>
    </table>
    <br><br>
      
    <div id="field"></div>
</body>
  
</html>