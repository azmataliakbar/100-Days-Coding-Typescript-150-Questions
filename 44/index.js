/*
! Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
 */
/*
todo=> Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
*/
function make_sandwich(...items) {
    console.log(`\nMaking a sandwich with: ${items.join(', ')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
export {};
