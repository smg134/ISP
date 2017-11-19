<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['signin'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            if ($username == "" || $password == "") {
                echo "Invalid username or password.";
            }
            else {
                
            }
        }
        if (isset($_POST['guest'])) {
            
        }
        if (isset($_POST['signup'])) {
            $firstName = $_POST['first_name'];
            $lastName = $_POST['last_name'];
            $username = $_POST['new_username'];
            $password = $_POST['new_password'];
            //database
            $serverName = "aphasiaservice.database.windows.net";
            $connectionOptions = array(
                "Database" => "AphasiaDB",
                "Uid" => "seangaffney",
                "PWD" => "D0gmeatG00dyear"
            );
            $conn = sqlsrv_connect($serverName, $connectionOptions);
            $query = "INSERT INTO ACCOUNTS (Email, Password, Date, First Name, Last Name)
                      VALUES ('$username', '$password', '$firstName', '$lastName')";
            $getResults = sqlsrv_query($conn, $query);
            if ($getResults == FALSE)
                echo (sqlsrv_errors());
        }
        if (isset($_POST['recover'])) {
            $username = $_POST['recover_username'];
        }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">       
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <script type="text/javascript" src="javascript.js" ></script>
    </head>
    <body>
        <!--Entire page-->
        <div class="page">
            <!--Login Section-->
            <div class="login">
                <h1>Title of the webpage goes right here</h1>
                <form method="post">
                    <input type="text" id="username" name="username" placeholder="Email">
                    <input type="password" id="password" name="password" placeholder="Password">
                    <input type="submit" id="signin" name="signin" value="Sign In" style="cursor:pointer">
                    <input type="submit" id="guest" name="guest" value="Continue as guest" style="cursor:pointer">
                </form>
                <div id="forgot_password">
                    <a href="javascript:void(0)" onclick="displayForgotPassword();">Forgot password?</a>
                    <a style="float: right;" href="javascript:void(0)" onclick="displayCreateAccount();">Create account</a>
                </div>
            </div>
            <!--Create Account-->
            <div class="blur">
                <a href="javascript:void(0)" onclick="hidePopups();"><span id="blur_span"></span></a>
            </div>
            <div class="create_account">
                <form method="post">
                    <input type="text" id="first_name" name="first_name" placeholder="First Name">
                    <input type="text" id="last_name" name="last_name" placeholder="Last Name">
                    <input type="text" id="username" name="new_username" placeholder="Email">
                    <input type="password" id="password" name="new_password" placeholder="Password">
                    <input type="submit" id="signup" name="signup" value="Sign Up" style="cursor:pointer">
                </form>
            </div>
            <!--Password Recovery-->
            <div class="forgot_password">
                <form method="post">
                    <input type="text" id="username" name="recover_username" placeholder="Email">
                    <input type="submit" id="recover" name="recover" value="Send Recovery Email" style="cursor:pointer">
                </form>
            </div>
        </div>
    </body>
</html>