"use strict";
/* Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest. */
let guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
let unableToAttend = "Nikola Tesla";
console.log(`\n${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => {
    console.log(`\nDear ${guest}, would you like to join me for dinner?`);
});
