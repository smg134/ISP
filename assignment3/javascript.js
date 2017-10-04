function displayTitle() {
	document.getElementById("title").style.display = "block";
	document.getElementById("header").style.display = "none";
	document.getElementById("subheader").style.display = "none";
	document.getElementById("paragraph").style.display = "none";
	document.getElementById("bg-color").style.display = "none";
	document.getElementById("bg-image").style.display = "none";
	document.getElementById("image").style.display = "none";
	document.getElementById("animation").style.display = "none";
}

function displayHeader() {
	document.getElementById("title").style.display = "none";
	document.getElementById("header").style.display = "block";
	document.getElementById("subheader").style.display = "none";
	document.getElementById("paragraph").style.display = "none";
	document.getElementById("bg-color").style.display = "none";
	document.getElementById("bg-image").style.display = "none";
	document.getElementById("image").style.display = "none";
	document.getElementById("animation").style.display = "none";
}

function displaySubheader() {
	document.getElementById("title").style.display = "none";
	document.getElementById("header").style.display = "none";
	document.getElementById("subheader").style.display = "block";
	document.getElementById("paragraph").style.display = "none";
	document.getElementById("bg-color").style.display = "none";
	document.getElementById("bg-image").style.display = "none";
	document.getElementById("image").style.display = "none";
	document.getElementById("animation").style.display = "none";
}

function displayParagraph() {
	document.getElementById("title").style.display = "none";
	document.getElementById("header").style.display = "none";
	document.getElementById("subheader").style.display = "none";
	document.getElementById("paragraph").style.display = "block";
	document.getElementById("bg-color").style.display = "none";
	document.getElementById("bg-image").style.display = "none";
	document.getElementById("image").style.display = "none";
	document.getElementById("animation").style.display = "none";
}

function displayBackgroundColor() {
	document.getElementById("title").style.display = "none";
	document.getElementById("header").style.display = "none";
	document.getElementById("subheader").style.display = "none";
	document.getElementById("paragraph").style.display = "none";
	document.getElementById("bg-color").style.display = "block";
	document.getElementById("bg-image").style.display = "none";
	document.getElementById("image").style.display = "none";
	document.getElementById("animation").style.display = "none";
}

function displayBackgroundImage() {
	document.getElementById("title").style.display = "none";
	document.getElementById("header").style.display = "none";
	document.getElementById("subheader").style.display = "none";
	document.getElementById("paragraph").style.display = "none";
	document.getElementById("bg-color").style.display = "none";
	document.getElementById("bg-image").style.display = "block";
	document.getElementById("image").style.display = "none";
	document.getElementById("animation").style.display = "none";
}

function displayImage() {
	document.getElementById("title").style.display = "none";
	document.getElementById("header").style.display = "none";
	document.getElementById("subheader").style.display = "none";
	document.getElementById("paragraph").style.display = "none";
	document.getElementById("bg-color").style.display = "none";
	document.getElementById("bg-image").style.display = "none";
	document.getElementById("image").style.display = "block";
	document.getElementById("animation").style.display = "none";
}

function displayAnimation() {
	document.getElementById("title").style.display = "none";
	document.getElementById("header").style.display = "none";
	document.getElementById("subheader").style.display = "none";
	document.getElementById("paragraph").style.display = "none";
	document.getElementById("bg-color").style.display = "none";
	document.getElementById("bg-image").style.display = "none";
	document.getElementById("image").style.display = "none";
	document.getElementById("animation").style.display = "block";
}

var page = "<!DOCTYPE html><html>";
var window;

function setTitle() {
	page += "<title>" + document.getElementById("title_form")[0].value + "</title>";
	return false;
}

function addHeader() {
	page += "<h1 style=\"color:" + document.getElementById("header_form")[1].value + "\">" + document.getElementById("header_form")[0].value + "</h1>";
	return false;
}

function addSubheader() {
	page +=  "<h2 style=\"color:" + document.getElementById("subheader_form")[1].value + "\">" + document.getElementById("subheader_form")[0].value + "</h2>";
	return false;
}

function addParagraph() {
	page += "<p style=\"color:" + document.getElementById("paragraph_form")[1].value + "\">" + document.getElementById("paragraph_form")[0].value + "</p>";
	alert(page);
	return false;
}

function setBackgroundColor() {
	page += "<style>body{background-color: " + document.getElementById("bg-color_form")[0].value + ";}</style>";
	alert(page);
	return false;
}

function setBackgroundImage() {
	//TODO: do this
}

function addImage() {
	page += "<img src=\"" + document.getElementsByName("imageInput")[0].value + "\" alt=\"Image not found\" style=\"width:" + document.getElementsByName("imageWidth")[0].value + ";height:" + document.getElementsByName("imageHeight")[0].value + ";\">";
	return false;
}

function addAnimation() {
	//container
	page += "<style>#container{width: " + document.getElementById("container_form")[0].value + "; height: " + document.getElementById("container_form")[1].value + "; postition: relative; background: " + document.getElementById("container_form")[2].value + "; }";
	//animate
	page += "#animate { width: " + document.getElementById("animate_form")[0].value + "; height: " + document.getElementById("animate_form")[1].value + "; position: absolute; background-color: " + document.getElementById("animate_form")[2].value + "; }</style><body><div id = \"container\"><div id = \"animate\"></div></div>";	
	//style
	var type = document.getElementById("animation-style_form")[0].value;
	if (type == 1) {
		page += "<script>function Move() { var elem = document.getElementById(" + "\"" + "animate" + "\""  + "); var pos = 0; var id = setInterval(frame, 5); function frame() { if (pos == 350) { clearInterval(id); } else { pos++;  elem.style.top = pos + 'px'; } } }";
		page += "</scr" + "ipt>";
	}
	else if (type == 2) {
		page += "<script>function Move() { var elem = document.getElementById(" + "\"" + "animate" + "\""  + "); var pos = 0; var id = setInterval(frame, 5); function frame() { if (pos == 350) { clearInterval(id); } else { pos++;  elem.style.left = pos + 'px'; } } }";
		page += "</scr" + "ipt>";
	}
	else if (type == 3) {
		page += "<script>function Move() { var elem = document.getElementById(" + "\"" + "animate" + "\""  + "); var pos = 0; var id = setInterval(frame, 5); function frame() { if (pos == 350) { clearInterval(id); } else { pos++;  elem.style.top = pos + 'px';  elem.style.left = pos + 'px'; } } }";			
		page += "</scr" + "ipt>";
	}
	alert(page);
	return false;
}