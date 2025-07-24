function validateLogin() {
    var username = document.getElementById("textip").value;
    var errorMessage = document.getElementById("error-message");
    var x=toLowerCase(username);
    console.log(x);
    if (username === "Bharath") {
        window.location.href = "search.html"; 
    } else {
        window.location.href = "search.html"; 
        errorMessage.innerText = "Invalid Username or Password!";
    }
}  
