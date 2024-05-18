/*
! Question 101:** Generate a random integer between 1 and 10.
 */
// Generates a random integer between 1 and 10
function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log("\n", getRandomInt()); // Outputs a random integer between 1 and 10
export {};
//? This function combines Math.random() with Math.floor() to create a random integer within our range.
