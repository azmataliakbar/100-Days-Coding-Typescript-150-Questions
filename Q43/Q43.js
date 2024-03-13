/*Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/



var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

// Function describe original array
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}

// Function modify array and add "The great"
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("The Great ".concat(magician, "."));
    }
    return great_magicians;
}

// Array of magician
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// A copy of the array of magician names
var magician_names_copy = __spreadArray([], magician_names, true);

// Calling make_great with a copy of the array of magician names
var great_magicians = make_great(magician_names_copy);

// Calling show_magicians with the original and modified arrays
console.log("\nOriginal Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
