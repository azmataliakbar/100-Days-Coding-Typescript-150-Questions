/*
!Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
 */

/*
todo=> Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.
 */



let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("\nUnfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`\nSorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`\nDear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log("\n", guests); // Shows an empty list