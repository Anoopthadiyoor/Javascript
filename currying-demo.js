// Standard two-argument function
function multiply(a, b) {
    return a * b;
}

// Curried version
function curriedMultiply(a) {
    return function(b) {
        return a * b;
    };
}

// Or using ES6 arrow functions for a cleaner look:
const curriedMultiplyArrow = a => b => a * b;

console.log(curriedMultiply(5)(4)); // Output: 20
