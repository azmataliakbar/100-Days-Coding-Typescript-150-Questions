/*
! Question 132: Discuss the difference between default and named exports in JavaScript modules.
 */

// Importing named exports:
import { utilOne, utilTwo } from "./utils";
console.log("\n", utilOne, utilTwo);


// Importing a default export:
import Calculator from "./Calculator";
console.log("\n", Calculator);

// This code illustrates the syntax and usage differences between default and named exports.