/*
!Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
 */
/*
todo=> Explain & TIP: Expanding on the previous exercise, if-else chains allow you to handle multiple conditions.
 */
//Version that runs the if block:
let alien_color = "green";
if (alien_color == "green") {
    console.log("\nYou just earned 5 points for shooting the alien!");
}
else {
    console.log("\nYou just earned 10 points.");
}
//Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("\nYou just earned 5 points for shooting the alien!");
}
else {
    console.log("\nYou just earned 10 points.");
}
export {};
