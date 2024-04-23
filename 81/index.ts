/* Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values. */

// This function shows every detail about an object , in parameter we must write obj: { [key: string]: any } , the parameter obj: object shows error

function logObjectProperties(obj: { [key: string]: any }) {
  for (let property in obj) {
      // Loops through each property in the object
      console.log(`\n${property}: ${obj[property]}`);
      // Shows the property name and its value
  }
}

// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// It tells us each piece of information stored about the car.