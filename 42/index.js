/*
! Question 42: Great Magicians: Add "the Great" to magician names.
 */
/*
todo=> Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
*/
let magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log("\n", magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
export {};
