/* Question 130: Explain how to export a function from one JavaScript file and import it into another file. */

// In another file where you want to use the add function:
import { add } from "./mathFunction";
//change to "type": "commonjs" in package.json file

console.log("\n", add(2, 3)); // Outputs: 5
// Demonstrates importing the add function from mathFunctions.ts and using it.