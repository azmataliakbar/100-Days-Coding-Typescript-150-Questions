/* Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM. */

// Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentTime = new Date();
if (currentTime.getHours() < 12) {
  console.log("\n", "Good Morning"); // It's morning if before 12 PM, after 12 PM nothing will print
}
// This simple check helps us greet users appropriately based on the time of day.