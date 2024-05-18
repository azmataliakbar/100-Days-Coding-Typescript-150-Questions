/*
!Question 139: List three reserved words in JavaScript and create a valid use case for each.
*/

/*
todo=> Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable. 
*/

// Reserved word 1: let - used to declare a block-scoped local variable
let count = 5;

// Reserved word 2: if - used to execute a block of code if a specified condition is true
if (count > 0) {
  console.log("\nCount is greater than 0.");
}

// Reserved word 3: return - used to exit a function and return a value from that function
function add(a, b) {
  return a + b;
}
const result = add(3, 4);
console.log("\n" ,result);

//? Demonstrates valid use cases for the reserved words 'let', 'if', and 'return'.