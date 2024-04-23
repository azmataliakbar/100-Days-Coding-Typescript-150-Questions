/*
!Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
 */
/* 
todo=> Explain & TIP: This exercise introduces you to handling multiple specific conditions in an if-else chain.
 */
//Green alien version:

let alien_color = "green";

if (alien_color == "green") {
    console.log("\nYou earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("\nYou earned 10 points.");
} else if (alien_color == "red") {
    console.log("\nYou earned 15 points.");
}

//Yellow alien version:

alien_color = "yellow";
if (alien_color == "green") {
    console.log("\nYou earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("\nYou earned 10 points.");
} else if (alien_color == "red") {
    console.log("\nYou earned 15 points.");
}

//Red alien version:

alien_color = "red";
if (alien_color == "green") {
    console.log("\nYou earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("\nYou earned 10 points.");
} else if (alien_color == "red") {
    console.log("\nYou earned 15 points.");
}