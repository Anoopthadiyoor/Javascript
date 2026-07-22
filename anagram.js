function areAnagrams(str1, str2) {
    const cleanString = (str) => str.toLowerCase().split('').sort().join('');
    return cleanString(str1) === cleanString(str2);
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
