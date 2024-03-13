/*Q45: Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.*/

// object with properties
interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: any; // Allow arbitrary additional properties
}

function store_car(manufacturer: string, modelName: string, ...extras: [string, any][]): Car {
  let car: Car = {
      manufacturer: manufacturer,
      modelName: modelName
  };
  
  // Loop through additional name-value pairs and add them to the car object
  for (let [key, value] of extras) {
      car[key] = value;
  }
  
  return car;
}

// The function with required information and additional properties
let myCar: Car = store_car("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Printing the object returned by the function
console.log(myCar);
