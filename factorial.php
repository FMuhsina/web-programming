<html>
<body bgcolor=#c2817a>
    <div style="padding: 30px; color: white;">
        <body>
            <h2>FIBONACCI SERIES</h2>
            <form action="" method="post">
                Enter the number: 
                <input type="number" name="number" />
                <input type="submit" />
            </form>
        </body>
        <?php
            if($_POST)
            {
                $number = $_POST['number'];
                $result=1;
                if ($number < 0) 
                    echo "Factorial is not defined for negative numbers."; 
                elseif ($number == 0) 
                    echo "The factorial of $number is $result"; 
                else 
                {
                    for($n=1;$n<=$number;$n++)
                        $result=$result*$n;
                    echo "The factorial of $number is $result";
                } 
            }
        ?>
    </div>
</body>
</html>
