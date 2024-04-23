"use strict";
/* Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop. */
let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log(`\nThis laptop is for production year: ${this.year}, made by: ${this.make}, and model: ${this.model}.`);
    }
};
laptop.describe();
