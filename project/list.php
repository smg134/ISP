<html>
<head>
<title>Page list</title>
</head>
<body>

<?php

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

// display pages
$query = "SELECT * FROM Content";
$result = mysql_query($query);
if (!$result) {
    print "Error - the query could not be executed";
    $error = mysql_error();
    print "<p>" . $error . "</p>";
    exit;
}

print "<a href='http://pausch.cs.uakron.edu/~smg134/project/index.html'>Home</a>-----<a href='http://pausch.cs.uakron.edu/~smg134/project/login.html'>Logout</a>-----<a href='http://pausch.cs.uakron.edu/~smg134/project/help.html'>Help</a><br />";
print "<h2>Pages</h2>";
print "<ul style='list-style-type:square'>";
$num_rows = mysql_num_rows($result);
if ($num_rows == 0) {
	print "<p>No pages have been created yet!</p>";
}
else {
	$row = mysql_fetch_array($result);
	for ($row_num = 0; $row_num < $num_rows; $row_num++) {
		$values = array_values($row);
		$title = $values[1];
		$user = $values[4];
		print "<li><a href='view.php?page=<?php echo $values[3]'>" . $title . "</a> by " . $user . "</li>";
		$row = mysql_fetch_array($result);
		}
		print "</ul>";
}

?>
</body>
</html>