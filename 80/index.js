"use strict";
/* Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations. */
// 3 diffrent methods
/* interface Car {
  make: string;
  model: string;
  year: number;
  color?: string; // Make color optional with '?'
}

let car: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
// Now color property is added in object
}; */
// or or or
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
// or or or
// Starting with our car object, added type any to object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Adding a new property 'color' and updating 'year'
car.color = "blue"; // Adds a new property 'color'
car.year = 2021; // Updates the 'year' property
// Showing the updated car object
console.log("\n", car); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.
