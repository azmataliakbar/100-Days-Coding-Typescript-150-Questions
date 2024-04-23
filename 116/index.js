"use strict";
/* Question 116: Create a switch case that matches several cases to the same code block, representing seasons. */
// This function logs the season based on the month
function logSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("\n", "Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("\n", "Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("\n", "Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("\n", "Fall");
            break;
        default:
            console.log("\n", "Invalid month");
            break;
    }
}
logSeason(2); // Outputs: Spring
// Multiple cases share the same code block to represent each season.
