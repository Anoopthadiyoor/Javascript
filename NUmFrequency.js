// Question: Write a JavaScript program to rearrange an array so that numbers with higher frequency appear first. If two numbers have the same frequency, the number 
// that appeared earlier in the original array should come first.


let numbers = [4, 5, 6, 4, 5, 4, 7, 6];

let frequency = {};

for (let num of numbers) {
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

let result = [...new Set(numbers)];

result.sort((a, b) => {
    return frequency[b] - frequency[a];
});

let finalArray = [];

for (let num of result) {
    for (let i = 0; i < frequency[num]; i++) {
        finalArray.push(num);
    }
}

console.log(finalArray);
