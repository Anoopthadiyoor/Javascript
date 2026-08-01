const accounts = [
    {
        acno:1000,actype:'savings',balance:45000,transaction:[
            {to:1001,amount:6000,msg:'ebil',mode:'gpay'},
            {to:1002,amount:2000,msg:'emi',mode:'neft'},
            {to:1003,amount:1000,msg:'recharge',mode:'phonepe'}
        ]
    },
    {
        acno:1001,actype:'current',balance:30000,transaction:[
            {to:1000,amount:1000,msg:'grossary',mode:'gpay'},
            {to:1001,amount:5000,msg:'ebil',mode:'gpay'},
            {to:1002,amount:2000,msg:'emi',mode:'neft'},
            {to:1003,amount:1000,msg:'recharge',mode:'phonepe'}
        ]
    },
    {
        acno:1002,actype:'fixed',balance:100000,transaction:[
            {to:1000,amount:5000,msg:'ebil',mode:'gpay'},
            {to:1001,amount:2000,msg:'emi',mode:'neft'},
            {to:1003,amount:1000,msg:'recharge',mode:'phonepe'}
        ]
    },
    {
        acno:1003,actype:'savings',balance:30000,transaction:[
            {to:1001,amount:7000,msg:'ebil',mode:'gpay'},
            {to:1002,amount:2000,msg:'emi',mode:'neft'},
            {to:1000,amount:1000,msg:'recharge',mode:'phonepe'}
        ]
    }
];


// 1. Total number of accounts
console.log(accounts.length);


// 2. Print account numbers whose account type is savings
console.log(accounts.filter(acc => acc.actype === "savings").map(acc => acc.acno));


// 3. Print the balance of account number 1000
console.log(accounts.find(acc => acc.acno === 1000).balance);


// 4. Print all GPay transactions
console.log(  accounts.flatMap(acc => acc.transaction.filter(t => t.mode === "gpay")));


// 5. Print all transactions whose amount > 5000
console.log(accounts.flatMap(acc => acc.transaction.filter(t => t.amount > 5000) ));


// 6. Print all credit transactions of account 1002
// Credit = transactions where money comes TO account 1002
console.log(accounts.flatMap(acc => acc.transaction.filter(t => t.to === 1002)));


// 7. Print all debit transactions of account 1002
// Debit = transactions made FROM account 1002
console.log(accounts.find(acc => acc.acno === 1002).transaction);


// 8. Print the highest balance account details
console.log(accounts.reduce((high, acc) => acc.balance > high.balance ? acc : high));


// 9. Print transaction history of account 1002
console.log( accounts.find(acc => acc.acno === 1002).transaction);


// 10. Print transaction history of account 1003
console.log( accounts.find(acc => acc.acno === 1003).transaction);
