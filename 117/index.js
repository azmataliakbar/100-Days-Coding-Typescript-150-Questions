"use strict";
/* Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match. */
// This function evaluates a grade and logs the corresponding remark
function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            console.log("\n", "Excellent");
            break;
        case "B":
            console.log("\n", "Good");
            break;
        case "C":
            console.log("\n", "Fair");
            break;
        case "D":
            console.log("\n", "Poor");
            break;
        case "F":
            console.log("\n", "Fail");
            break;
        default:
            console.log("\n", "Invalid grade");
            break;
    }
}
evaluateGrade("B"); // Outputs: Good
// Uses a switch statement to evaluate the grade and defaults to "Invalid grade" if no match is found.
