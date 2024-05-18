/*
! Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
 */
// This program makes a function that adds a specific number
// (number)  arg0: is added so it becomes (arg0: number) as below:-
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log("\n", addFive(15)); // If we put 10 in the box, it gives us 15
export {};
//? We made a function (magic box) that adds 5 to any number.
