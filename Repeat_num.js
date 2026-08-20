Q: Given an array of numbers, write a JavaScript program to find the first number that appears more than once.

let numbers = [12, 7, 19, 7, 25, 12];

let repeated = null;

for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] === numbers[j]) {
            repeated = numbers[i];
            break;
        }
    }

    if (repeated !== null) {
        break;
    }
}

console.log("First repeated number:", repeated);
