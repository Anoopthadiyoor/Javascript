function fibonacci(n) {
    // Base cases based on the definition of the sequence
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Recursive call: sum of the two preceding numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8 (Sequence: 0, 1, 1, 2, 3, 5, 8)
console.log(fibonacci(10)); // 55
