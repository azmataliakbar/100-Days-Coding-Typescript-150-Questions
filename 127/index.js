"use strict";
/* Question 127: Convert a traditional function expression to an arrow function. */
// Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to arrow function
const arrowFunction = (a, b) => a + b;
console.log("\n", traditionalFunction(5, 3)); // Outputs: 8
console.log("\n", arrowFunction(5, 3)); // Outputs: 8
// Demonstrates the conversion of a traditional function expression to an arrow function.
