/* 
!Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
 */

/*
todo=> Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.
*/

let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("\nGreat news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");

guests.forEach(guest => {
    console.log(`\nDear ${guest}, would you like to join me for dinner?`);
});