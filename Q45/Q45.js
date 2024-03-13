/*Q45: Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.*/


function store_car(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Loop through additional name-value pairs and add them to the car object
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var _b = extras_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}

// The function with required information and additional properties
var myCar = store_car("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Printing the object returned by the function
console.log(myCar);
