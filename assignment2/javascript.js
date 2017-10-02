function factorial() {
	var val = 1;
	var n = document.getElementById("id1").value;
	if (n < 0) { 
		document.getElementById("id1").style.backgroundColor = "#FA8072";
		alert("Number cannot be negative");
		return false;
	}
	else {
		document.getElementById("id1").style.backgroundColor = "white";
	}
	for (var i = 2; i <= n; i++)
		val = val * i;
	if (val > 0  && val <= 100) {
		document.getElementById("id1_result").style.fontSize = "xx-small";
		document.getElementById("id1_result").style.color = "purple";	
	}
	if (val > 100 && val <= 1000) {
		document.getElementById("id1_result").style.fontSize = "x-small";
		document.getElementById("id1_result").style.color = "blue";
	}
	if (val > 1000 && val <= 10000) {
		document.getElementById("id1_result").style.fontSize = "small";
		document.getElementById("id1_result").style.color = "green";
	}
	if (val > 10000 && val <= 100000) {
		document.getElementById("id1_result").style.fontSize = "medium";
		document.getElementById("id1_result").style.color = "#ffc433";
	}
	if (val > 100000 && val <= 1000000) {
		document.getElementById("id1_result").style.fontSize = "large";
		document.getElementById("id1_result").style.color = "orange";
	}
	if (val > 1000000 && val <= 10000000) {
		document.getElementById("id1_result").style.fontSize = "x-large";
		document.getElementById("id1_result").style.color = "#fc8181";
	}
	if (val > 10000000) {
		document.getElementById("id1_result").style.fontSize = "xx-large";
		document.getElementById("id1_result").style.color = "red";
	}
	document.getElementById("id1_result").innerHTML = val;
	return false;
}

function validate() {
	var str = document.getElementById("id2").value;
	if (/[!#$%^&*()]/.test(str)) {
		document.getElementById("id2").style.backgroundColor = "#FA8072";
		alert("Email contains invalid characters ! # $ % ^ & * ( )");
	}
	else {
		document.getElementById("id2").style.backgroundColor = "white";
	}
	return false;
}

function realTimeValidate() {
	var str = document.getElementById("id3").value;
	if (/[!#$%^&*()]/.test(str)) {
		document.getElementById("id3").style.backgroundColor = "#FA8072";
		alert("Email contains invalid characters ! # $ % ^ & * ( )");
	}
	else {
		document.getElementById("id3").style.backgroundColor = "white";
	}
	return false;
}

function moveImage(e) {
	var img = document.getElementById("id4");
	var x = img.getBoundingClientRect().x;
	var y = img.getBoundingClientRect().y;
	var mouseX = e.x;
	var mouseY = e.y;
	var id = setInterval(frame, 5);
	function frame() {
		if (x < mouseX) x++;
		else if (x > mouseX) x--;
		if (y < mouseY)	y++;
		else if (y > mouseY) y--;
		img.style.left = x + 'px';
		img.style.top = y + 'px';
		if (x === mouseX && y === mouseY) clearInterval(id);
	}	
}

document.getElementById("main").addEventListener("click", moveImage);