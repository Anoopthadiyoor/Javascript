// Guess What I'm Thinking" program. It pretends to read your mind using a few calculations.

let number = prompt("Think of any number");

number = Number(number);

number = number * 2;
number = number + 10;
number = number / 2;
number = number - Number(prompt("Now enter the number you started with"));

alert("I know your final answer... 😎");
alert("Your answer is 5!");
