function displayCreateAccount() {
    var elem = document.getElementsByClassName("create_account");
    elem[0].style.display = "block";
    elem = document.getElementsByClassName("blur");
    elem[0].style.display = "block";
}

function displayForgotPassword() {
    var elem = document.getElementsByClassName("forgot_password");
    elem[0].style.display = "block";
    elem = document.getElementsByClassName("blur");
    elem[0].style.display = "block";
}

function hidePopups() {
    var elem = document.getElementsByClassName("create_account");
    elem[0].style.display = "none";
    elem = document.getElementsByClassName("forgot_password");
    elem[0].style.display = "none";
    elem = document.getElementsByClassName("blur");
    elem[0].style.display = "none";
}