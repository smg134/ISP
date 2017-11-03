function displayChangeEmail() {
    document.getElementsByClassName("change_email")[0].style.display = "block";
    document.getElementsByClassName("change_password")[0].style.display = "none";
    return false;
}

function displayChangePassword() {
    document.getElementsByClassName("change_email")[0].style.display = "none";
    document.getElementsByClassName("change_password")[0].style.display = "block";
    return false;
}

function hideChangeEmail() {
    document.getElementsByClassName("change_email")[0].style.display = "none";
    return false;
}

function hideChangePassword() {
    document.getElementsByClassName("change_password")[0].style.display = "none";
    return false;
}