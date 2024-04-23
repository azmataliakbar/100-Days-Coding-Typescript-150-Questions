/*
!Question 34: Pizzas: Share your favorite pizzas and express your love for them.
  */
/*
todo=> Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your preference for each type. This demonstrates looping through an array and appending custom messages to each item.
*/
var pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("\nI like ".concat(pizza, " pizza."));
});
console.log("\nI really love pizza!");
