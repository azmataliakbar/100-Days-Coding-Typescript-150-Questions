"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//todo=>  This file is: Person.ts
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("\nHello, my name is ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
//! Exports the Person class to index.ts
