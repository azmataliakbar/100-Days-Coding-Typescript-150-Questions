/*
 !Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
  */
/*
todo=> Explain & TIP: Just like with transportation, you can use an array to manage a list of guests. Loop through the list to send each one a personal invitation.
 */
let guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(guest => {
    console.log(`\nDear ${guest}, would you like to join me for dinner?`);
});
export {};
