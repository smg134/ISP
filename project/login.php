<html>
<head>
<title>Logging in...</title>
</head>
<body>

<?php
    
// Get input data
    $username= $_POST["username"];
    $password = $_POST["password"];
    $new_username = $_POST["new_username"];
    $new_password = $_POST["new_password"];
	
	if (($username == '' || $password == '') && ($new_username == '' || $new_password == '')){
		header("Location:http://pausch.cs.uakron.edu/~smg134/project/invalid_login.html");
		exit;
	}

// Connect to MySQL
$db = mysql_connect("db1.cs.uakron.edu:3306", "smg134", "aeCh1xee");
if (!$db) {
     print "Error - Could not connect to MySQL";
     exit;
}

// Select the database
$er = mysql_select_db("ISP_smg134");
if (!$er) {
    print "Error - Could not select the database";
    exit;
}

//if logging in
if($username != '' && $password != '') {
    $query = "SELECT * FROM Accounts WHERE username = '$username'";
	$result = mysql_query($query);
	//check if password matches username
	$match_found = false;
	$num_rows = mysql_num_rows($result);
	$row = mysql_fetch_array($result);
	for ($row_num = 0; $row_num < $num_rows; $row_num++){
		$value = array_values($row);
		if ($value[2] == $password)
			$match_found = true;
		$row = mysql_fetch_array($result);
	}
	//if it doesn't match
	if ($match_found == false) {
		header("Location:http://pausch.cs.uakron.edu/~smg134/project/invalid_login.html");
		exit;
	}
	//else it matches
	else {
		header("Location:http://pausch.cs.uakron.edu/~smg134/project/index.html");
		exit;
	}
}

//else if creating account
else if ($new_username != '' && $new_password != '') {
	//check if username exists already
	$query = "SELECT * FROM Accounts WHERE username = '$new_username'";
	$result = mysql_query($query);
	//if it exists
	if (mysql_num_rows($result) != 0) {
		header("Location:http://pausch.cs.uakron.edu/~smg134/project/invalid_login.html");
		exit;
	}
	//else create it
	else {
		$query = "insert into Accounts values('$new_username', '$new_password')";
		$result = mysql_query($query);
		if (!$result) {
			print "Error - the query could not be executed";
			$error = mysql_error();
			print "<p>" . $error . "</p>";
		}
		else {
			print "Account created! Please go back and log in.";
		}
	}
}

?>
</body>
</html>