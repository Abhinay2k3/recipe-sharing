
function login() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username === "user@gmail.com" && password === "pass") {
        alert("Login Successfully");
        
    } else {
        alert("Invalid username or password");
    }
}
