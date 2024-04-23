"use strict";
/* Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests. */
let guests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("\nGreat news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");
guests.forEach(guest => {
    console.log(`\nDear ${guest}, would you like to join me for dinner?`);
});
