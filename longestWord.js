function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  
  return longest;
}

console.log(longestWord("I love programming in JavaScript")); 
console.log(longestWord("The quick brown fox"));            
