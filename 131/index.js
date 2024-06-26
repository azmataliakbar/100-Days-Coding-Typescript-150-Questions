"use strict";
/*
! Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// In another file:
var Person_1 = require("./Person"); //? This line code is imported from person.ts
var alice = new Person_1.Person("Alice");
alice.greet(); // Outputs: Hello, my name is Alice
// This snippet imports the Person class and uses it to create an instance.
