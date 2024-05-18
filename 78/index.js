/*
! Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number. */
// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// Function expression for squaring a number
const squareExpression = function (number) {
    return number * number;
};
// Using both functions to square the number 4
console.log("\n", squareDeclaration(4)); // Outputs: 16
console.log("\n", squareExpression(4)); // Outputs: 16
export {};
//? Both methods give us the same result, showing two different ways to create functions that do the same thing.
