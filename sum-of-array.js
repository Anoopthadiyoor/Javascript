function sumArray(numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(sumArray([1, 5, 10, 2])); 
