/*
!Question 35: Animals: Highlight animals with a common trait.
  */

/*
todo=> Explain & TIP: Looping through an array of animals allows you to comment on each one individually. This teaches you how to personalize messages within a loop based on array items.
*/

let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach(animal => {
    console.log(`\nA ${animal} would make a great pet.`);
});
console.log("\nAny of these animals would make a great pet!");