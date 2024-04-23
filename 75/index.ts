/* Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators. */

// This function uses compound assignment operators for different operations
function useCompoundOperators() {
  let x = 4; // Starts with x equal to 4
  console.log("\nInitial x:", x);

  x += 2; // Adds 2 to x
  console.log("\nAfter addition:", x); // Shows x after addition

  x -= 1; // Subtracts 1 from x
  console.log("\nAfter subtraction:", x); // Shows x after subtraction

  x *= 3; // Multiplies x by 3
  console.log("\nAfter multiplication:", x); // Shows x after multiplication

  x /= 2; // Divides x by 2
  console.log("\nAfter division:", x); // Shows x after division
}

useCompoundOperators();
// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.