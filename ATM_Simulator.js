let balance = 5000;

let amount = Number(prompt("Enter withdrawal amount"));

if (amount <= 0) {
    console.log("Invalid amount");
}
else if (amount > balance) {
    console.log("Insufficient balance");
}
else {
    balance = balance - amount;

    console.log("Please collect your cash");
    console.log("Remaining balance: ₹" + balance);
}
