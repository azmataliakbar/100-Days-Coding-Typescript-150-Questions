/*
!Question 18: Seeing the World: Think of at least five places you’d like to visit.
 */
/*
todo=> Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.
*/


let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("\nOriginal order:", places);

console.log("\nAlphabetical order:", [...places].sort());

console.log("\nOriginal order:", places);

console.log("\nReverse alphabetical order:", [...places].sort().reverse());

console.log("\nOriginal order:", places);

places.reverse();
console.log("\nReversed order:", places);

places.reverse();
console.log("\nOriginal order:", places);

places.sort();
console.log("\nAlphabetical order:", places);

places.reverse();
console.log("\nReverse alphabetical order:", places);