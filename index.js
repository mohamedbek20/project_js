function validateForm() {
    var isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name == "") {
        document.getElementById("nameError").innerText = "Name required";
        isValid = false;
    }

    if (email == "") {
        document.getElementById("emailError").innerText = "Email required";
        isValid = false;
    } else {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Email invalide";
            isValid = false;
        }
    }

    if (password == "") {
        document.getElementById("passwordError").innerText = "Password required";
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long";
        isValid = false;
    }

    return isValid;
}