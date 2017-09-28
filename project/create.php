<html>
<head>
<title>Creating page...</title>
</head>
<body>

<?php
    
// Get input data
	$title = $_POST["title"];
    $page= $_POST["page"];
	$username = $_POST["username"];

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

//add page to database
$query = "insert into Content values('$title', '$page', '$username')";
$result = mysql_query($query);
if (!$result) {
	print "Error - the query could not be executed";
	$error = mysql_error();
       print "<p>" . $error . "</p>";
}

header("Location:http://pausch.cs.uakron.edu/~smg134/project/index.html");
exit;

?>
</body>
</html>