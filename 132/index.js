"use strict";
/*
! Question 132: Discuss the difference between default and named exports in JavaScript modules.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Importing named exports:
var utils_1 = require("./utils");
console.log("\n", utils_1.utilOne, utils_1.utilTwo);
// Importing a default export:
var Calculator_1 = require("./Calculator");
console.log("\n", Calculator_1.default);
// This code illustrates the syntax and usage differences between default and named exports.
