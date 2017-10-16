<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$a = $_POST['input'] - '0';
	$b = $_POST['result'] - '0';
	if (isset($_POST['add'])) {
		$b = $a + $b;
	}
	if (isset($_POST['sub'])) {
		$b = $b - $a;
	}
	if (isset($_POST['mul'])) {
		$b = $a * $b;
	}
	if (isset($_POST['div'])) {
		$b = $b / $a;
	}
	if (isset($_POST['eq'])) {
		$b = $a;
	}
}
?>

<!DOCTYPE html>
<html>
	<body>
		<div class="calculator">
			<form method="post">
				<input type="text" name="result" value=<?php echo (isset($b))?$b:'0.0';?> readonly>
				<br>
				<input type="text" name="input" value=<?php echo (isset($b))?$a:'0';?>>
				<br>
				<input type="submit" name="add" value="+">
				<input type="submit" name="sub" value="-">
				<input type="submit" name="mul" value="*">
				<input type="submit" name="div" value="/">
				<input type="submit" name="eq" value="=">
			</form>
		</div>
	</body>
</html>