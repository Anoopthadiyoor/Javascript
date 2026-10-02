//Problem : Find the First Repeated Word Given a sentence, find the first word that appears more than once. The comparison should be case-insensitive, and punctuation
should be ignored.

let sentence = "The quick brown fox jumps over the lazy dog. The fox was fast.";

let words = sentence
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .split(" ");

let seen = {};
let repeatedWord = "No repeated word";

for (let word of words) {
    if (seen[word]) {
        repeatedWord = word;
        break;
    }

    seen[word] = true;
}

console.log(repeatedWord);
