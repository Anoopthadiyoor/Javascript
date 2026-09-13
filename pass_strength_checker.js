let password = prompt("Enter your password");

if (password.length < 6) {
    console.log("Weak password");
} 
else if (password.length < 10) {
    console.log("Medium password");
} 
else {
    console.log("Strong password");
}
