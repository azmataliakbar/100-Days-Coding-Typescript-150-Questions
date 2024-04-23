"use strict";
/* **Question 106:** Determine if a given year is a leap year using comparison operators. */
// This function checks if a year is a leap year
function isLeapYear(year) {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("\n", isLeapYear(2023)); // Outputs: true
console.log("\n", isLeapYear(2024)); // Outputs: false
// By using comparison operators, we can easily determine if a year is a leap year or not.
