"use strict";
/* Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists. */
// Creates a new Map to store countries and their capitals
const countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
// Logs the Map with the countries and their capitals.
// Answer
// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`\nThe capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("\n", "Canada is not in the Map.");
    }
}
// Assuming countries Map from Question
logCapitalOfCanada(countries);
// Checks if Canada is in our Map and logs the capital if it exists.
