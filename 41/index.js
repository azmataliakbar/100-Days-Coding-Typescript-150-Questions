/*
!Question 41: Magicians: Display magician names from an array.
 */
/*
todo=> Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
*/
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log("\n", magician);
    });
}
show_magicians(magicians);
