function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello"));   // false
