/*Q44: Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/


// Function describe messages by using if - else condition
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich summary:");
    if (items.length === 0) {
        console.log("\nYou ordered an empty sandwich.");
    }
    else {
        console.log("\nYou ordered a sandwich with the following items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
    console.log("\n");
}


// Call the function three times with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss Cheese");
make_sandwich("Peanut Butter", "Jelly");
make_sandwich();
