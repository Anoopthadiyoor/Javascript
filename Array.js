let numbers = [12, 5, 8, 20, 3, 15, 8, 10, 5, 20];

// 1. Print all elements
console.log("Array elements:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. Find the sum
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum:", sum);

// 3. Find the largest number
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number:", largest);

// 4. Count even numbers
let evenCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    }
}

console.log("Number of even elements:", evenCount);

// 5. Remove duplicate elements
let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log("Array without duplicates:", uniqueNumbers);
