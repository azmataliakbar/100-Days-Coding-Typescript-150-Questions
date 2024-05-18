/*
! Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
 */
// Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("\n", "Good Morning"); // It's morning if before 12 PM
}
//? This simple check helps us greet users appropriately based on the time of day.
//adding more options by using same method
function greetBasedOnTime() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
        console.log("\nGood morning");
    }
    if (currentHour >= 12 && currentHour < 18) {
        console.log("\nGood afternoon");
    }
    if (currentHour >= 18 && currentHour < 21) {
        console.log("\nGood evening");
    }
    if (currentHour >= 21 || currentHour < 5) {
        console.log("\nGood night");
    }
}
// the function to print the greeting based on the current time
greetBasedOnTime();
export {};
