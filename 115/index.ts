/*
! Question 115: Use a switch statement to log the days of the week based on a number (1-7).
 */

// This function logs the day of the week based on a number (1-7)
function logDayOfWeek(dayNumber: number): void {
  switch (dayNumber) {
    case 1:
      console.log("\n", "Sunday");
      break;
    case 2:
      console.log("\n", "Monday");
      break;
    case 3:
      console.log("\n", "Tuesday");
      break;
    case 4:
      console.log("\n", "Wednesday");
      break;
    case 5:
      console.log("\n", "Thursday");
      break;
    case 6:
      console.log("\n", "Friday");
      break;
    case 7:
      console.log("\n", "Saturday");
      break;
    default:
      console.log("\n", "Invalid day number");
      break;
  }
}

logDayOfWeek(1); // Outputs: Tuesday
// Uses a switch statement to select the appropriate day based on the provided number.