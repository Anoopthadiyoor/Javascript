let numbers = [2, 5, 2, 8, 5, 2, 8, 3, 5, 8, 8];

let frequency = {};

for (let i = 0; i < numbers.length; i++) {

    let num = numbers[i];

    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

console.log("Frequency:", frequency);

let highest = 0;
let secondHighest = 0;

let mostFrequent;
let secondMostFrequent;

for (let num in frequency) {

    if (frequency[num] > highest) {
        secondHighest = highest;
        secondMostFrequent = mostFrequent;

        highest = frequency[num];
        mostFrequent = num;
    }
    else if (frequency[num] > secondHighest &&
             frequency[num] < highest) {

        secondHighest = frequency[num];
        secondMostFrequent = num;
    }
}

console.log("Most frequent:", mostFrequent);
console.log("Second most frequent:", secondMostFrequent);
