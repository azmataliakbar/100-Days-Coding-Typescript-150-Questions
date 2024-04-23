/* Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */

let hisname: string = "Asharib"; // This saves the name

console.log("\n", hisname.toLowerCase()); // Shows the name in all small letters
console.log("\n", hisname.toUpperCase()); // Shows the name in ALL BIG LETTERS
console.log("\n", hisname.charAt(0).toUpperCase() + hisname.slice(1).toLowerCase()); // Shows the name with the First Letter Big