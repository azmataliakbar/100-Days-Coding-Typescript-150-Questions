/*
! Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
 */
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    // Now color property is added in object
};
// method 2
/* interface Car {
  make: string;
  model: string;
  year: number;
  color?: string; // Make color optional with '?'
}

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
  // Now color property is added in object
} as Car; */
// method 3
// Starting with our car object, added type any to object
/* let car:any = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
}; */
// Adding a new property 'color' and updating 'year'
car.color = "blue"; // Adds a new property 'color'
car.year = 2021; // Updates the 'year' property
// Showing the updated car object
console.log("\n", car); // Outputs the car object with the new color and updated year
export {};
// Now our car is blue and its model year is updated to 2021.
