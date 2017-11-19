<?php
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