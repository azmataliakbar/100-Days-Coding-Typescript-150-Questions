/*Q42: Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/


// Function of show_magician as in array
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}

// Function modify array and adding "The Great"
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("The Great ".concat(magician, "."));
    }
    return great_magicians;
}

// Array of magicians
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Calling make_great to modify the array of magicians
var great_magicians = make_great(magician_names);

// Calling show_magicians to see that the list has been modified
show_magicians(great_magicians);
