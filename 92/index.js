/*
! Question 92: Write a function to remove the last element from an array and return the removed element.
 */
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); // Removes and returns the last element of the array
}
// Example: Removing the last fruit from the array
const fruits = ["Apple", "Banana", "Cherry"];
console.log("\n", removeLastElement(fruits)); // Outputs: 'Cherry'
console.log("\n", fruits); // Outputs: ['Apple', 'Banana']
export {};
//? Here, we take out the last fruit and show the updated list.
