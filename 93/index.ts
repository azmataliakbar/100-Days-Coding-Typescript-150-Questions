/*
! Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
 */

// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits: string[]): void {

  const index = fruits.indexOf("Banana"); // Finds the index of "Banana"

  if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
                                            // If index !== -1, it means "Banana" was found, so we proceed to replace it.
                                           // If index === -1, it means "Banana" was not found, so we do nothing.
}

// Example: Replacing "Banana" in the array
const fruits: string[] = ["Apple", "Banana", "Cherry"];

replaceBananaWithMango(fruits);

console.log("\n", fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
//? We're swapping "Banana" for "Mango" in our fruit list.