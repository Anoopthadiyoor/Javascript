// Bank Transaction Management System

let accounts = [
    {
        accountNo: 1001,
        name: "Anoop",
        balance: 25000,
        transactions: []
    },
    {
        accountNo: 1002,
        name: "Rahul",
        balance: 18000,
        transactions: []
    },
    {
        accountNo: 1003,
        name: "Meera",
        balance: 32000,
        transactions: []
    }
];


// Find account
function findAccount(accountNo) {
    return accounts.find(account => account.accountNo === accountNo);
}


// Deposit money
function deposit(accountNo, amount) {

    let account = findAccount(accountNo);

    if (!account) {
        console.log("Account not found");
        return;
    }

    if (amount <= 0) {
        console.log("Invalid deposit amount");
        return;
    }

    account.balance += amount;

    account.transactions.push({
        type: "Deposit",
        amount: amount,
        balanceAfter: account.balance,
        date: new Date().toLocaleString()
    });

    console.log(
        amount,
        "deposited successfully into",
        account.name + "'s account."
    );
}


// Withdraw money
function withdraw(accountNo, amount) {

    let account = findAccount(accountNo);

    if (!account) {
        console.log("Account not found");
        return;
    }

    if (amount <= 0) {
        console.log("Invalid withdrawal amount");
        return;
    }

    if (amount > account.balance) {
        console.log("Insufficient balance");
        return;
    }

    account.balance -= amount;

    account.transactions.push({
        type: "Withdrawal",
        amount: amount,
        balanceAfter: account.balance,
        date: new Date().toLocaleString()
    });

    console.log(
        amount,
        "withdrawn successfully from",
        account.name + "'s account."
    );
}


// Transfer money
function transfer(fromAccount, toAccount, amount) {

    let sender = findAccount(fromAccount);
    let receiver = findAccount(toAccount);

    if (!sender || !receiver) {
        console.log("Invalid account number");
        return;
    }

    if (fromAccount === toAccount) {
        console.log("Cannot transfer to the same account");
        return;
    }

    if (amount <= 0) {
        console.log("Invalid transfer amount");
        return;
    }

    if (sender.balance < amount) {
        console.log("Insufficient balance");
        return;
    }

    sender.balance -= amount;
    receiver.balance += amount;

    sender.transactions.push({
        type: "Transfer Sent",
        amount: amount,
        to: receiver.name,
        balanceAfter: sender.balance,
        date: new Date().toLocaleString()
    });

    receiver.transactions.push({
        type: "Transfer Received",
        amount: amount,
        from: sender.name,
        balanceAfter: receiver.balance,
        date: new Date().toLocaleString()
    });

    console.log(
        amount,
        "transferred from",
        sender.name,
        "to",
        receiver.name
    );
}


// Display account details
function displayAccount(accountNo) {

    let account = findAccount(accountNo);

    if (!account) {
        console.log("Account not found");
        return;
    }

    console.log("\n==============================");
    console.log("Account Number :", account.accountNo);
    console.log("Account Holder :", account.name);
    console.log("Balance        :", account.balance);

    console.log("\nTransaction History:");

    if (account.transactions.length === 0) {
        console.log("No transactions available");
    }
    else {

        account.transactions.forEach((transaction, index) => {

            console.log(
                index + 1 + ".",
                transaction.type,
                "| Amount:",
                transaction.amount,
                "| Balance:",
                transaction.balanceAfter
            );

        });
    }

    console.log("==============================");
}


// Calculate total money in bank
function totalBankBalance() {

    return accounts.reduce(function (total, account) {

        return total + account.balance;

    }, 0);
}


// Find account with highest balance
function richestAccount() {

    return accounts.reduce(function (highest, account) {

        return account.balance > highest.balance
            ? account
            : highest;

    });
}


// Display all accounts
function displayAllAccounts() {

    console.log("\n===== ALL ACCOUNTS =====");

    accounts.forEach(function (account) {

        console.log(
            account.accountNo,
            "-",
            account.name,
            "- Balance:",
            account.balance
        );

    });
}


// Perform transactions

deposit(1001, 5000);

withdraw(1002, 3000);

transfer(1001, 1003, 7000);

deposit(1003, 2500);

withdraw(1003, 4000);


// Display individual accounts

displayAccount(1001);

displayAccount(1002);

displayAccount(1003);


// Display all accounts

displayAllAccounts();


// Bank statistics

console.log("\n===== BANK STATISTICS =====");

console.log(
    "Total Money in Bank:",
    totalBankBalance()
);

let richest = richestAccount();

console.log(
    "Highest Balance:",
    richest.name,
    "=>",
    richest.balance
);


// Find accounts having balance above 20000

console.log("\n===== ACCOUNTS ABOVE 20,000 =====");

let highBalanceAccounts = accounts.filter(function (account) {

    return account.balance > 20000;

});

highBalanceAccounts.forEach(function (account) {

    console.log(
        account.name,
        "=>",
        account.balance
    );

});


// Count total transactions

let transactionCount = accounts.reduce(function (total, account) {

    return total + account.transactions.length;

}, 0);

console.log(
    "\nTotal Transactions:",
    transactionCount
);
