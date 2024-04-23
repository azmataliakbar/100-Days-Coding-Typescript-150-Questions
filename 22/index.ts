/* 
!Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
 */
/*
todo=> Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. Experimenting with this helps you understand array boundaries.
*/


let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log("\n", friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds/ undefined

friends[2] = "Charlie"; // Correcting the error by accessing a valid index.
console.log("\n", friends[2]);