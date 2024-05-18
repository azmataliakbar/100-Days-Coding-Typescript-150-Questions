/*
! Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
 */
// Describing a circle using our Shape type
let circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log("\n", circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
export {};
//? We made a flexible program that can describe different shapes in detail.
