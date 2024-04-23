/*
!Question 36: T-Shirt: Create a function for customizing t-shirts.
  */
/*
todo=> Explain & TIP: Writing a function that accepts parameters allows you to reuse code efficiently. This introduces you to function parameters and printing dynamic content based on those parameters.
*/
function make_shirt(size, message) {
    console.log("\n".concat(size, "  \"").concat(message, "\"."));
}
make_shirt("Medium", "Code is Life");
