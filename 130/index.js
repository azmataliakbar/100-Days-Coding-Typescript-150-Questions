"use strict";
/*
! Question 130: Explain how to export a function from one JavaScript file and import it into another file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// In another file where you want to use the add function:
var mathFunction_1 = require("./mathFunction"); //? Line 5 of file mathFunction is imported here
//change to "type": "commonjs" in package.json file
console.log("\n", (0, mathFunction_1.add)(2, 3)); // Outputs: 5
//? Demonstrates importing the add function from mathFunctions.ts and using it.
