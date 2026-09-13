let names = ["Anoop", "Rahul", "Arjun", "Vishnu"];

let compliments = [
    "You have great coding skills!",
    "You learn really fast!",
    "You are going to become a great developer!",
    "Your ideas are interesting!"
];

let name = names[Math.floor(Math.random() * names.length)];
let compliment = compliments[Math.floor(Math.random() * compliments.length)];

console.log(name + ", " + compliment);
