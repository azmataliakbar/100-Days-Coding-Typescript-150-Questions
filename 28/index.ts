/*
!Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
 */
/* 
todo=> Explain & TIP: Use age to check the life stage. This practice shows how to handle multiple conditions with an if-else chain.
 */
let age: number = 300;

if (age > 0 && age <= 2) {
    console.log("\nThe person is a baby.");
} else if (age > 2 && age <= 4) {
    console.log("\nThe person is a toddler.");
} else if (age > 4 && age <= 13) {
    console.log("\nThe person is a kid.");
} else if (age > 13 && age <= 20) {
    console.log("\nThe person is a teenager.");
} else if (age > 20 && age <= 65) {
    console.log("\nThe person is an adult.");
} else if (age > 65) {
    console.log("\nThe person is an elder.");
} else {
    console.log("\nInvalid entry, Please enter correct age.");
    
}