function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

console.log(countVowels("javascript")); // Output: 3
console.log(countVowels("OpenAI"));     // Output: 4
