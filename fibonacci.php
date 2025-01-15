<html>
    <body>
        <h2>FIBONACCI SERIES</h2>
        <form action="" method="post">
            Enter the number: 
            <input type="number" name="number" />
            <input type="submit" />
        </form>
    </body>
<body style="background-color:#6f819e; padding: 30px; color:white;">
    <?php
        if($_POST)
        {
            $n = $_POST['number'];
            $num1 = 0;
            $num2 = 1;
            echo "Fibonacci Series up to $n terms:<br><br>";
            for ($i = 0; $i < $n; $i++) 
            {
                echo $num1 . "                     ";
                $num3 = $num1 + $num2;
                $num1 = $num2;
                $num2 = $num3;
            } 
        }
        
    ?>
</body>
</html>
        
 
