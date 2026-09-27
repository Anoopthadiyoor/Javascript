 Given the following JavaScript array let numbers = [10, 25, 14, 30, 25, 7, 18, 40, 14, 9];, write a JavaScript program to (1) print all the elements of the array, 
(2) find and print the smallest number, (3) find and print the average of all elements,(4) count and print the number of odd elements, and (5) find and print the
second largest unique number.


  let numbers = [10, 25, 14, 30, 25, 7, 18, 40, 14, 9];

// 1. Print all elements
console.log("Array elements:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. Find the smallest number
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Smallest number:", smallest);

// 3. Find the average
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log("Average:", average);

// 4. Count odd numbers
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddCount++;
    }
}

console.log("Number of odd elements:", oddCount);

// 5. Find the second largest unique number
let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}

let largest = uniqueNumbers[0];
let secondLargest = -Infinity;

for (let i = 1; i < uniqueNumbers.length; i++) {
    if (uniqueNumbers[i] > largest) {
        secondLargest = largest;
        largest = uniqueNumbers[i];
    } else if (uniqueNumbers[i] > secondLargest && uniqueNumbers[i] !== largest) {
        secondLargest = uniqueNumbers[i];
    }
}

console.log("Second largest unique number:", secondLargest);
