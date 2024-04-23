/*
!Question 37: Large Shirts: Default values in make_shirt().
  */
/*
todo=> Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.
 */
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("\n ".concat(size, "  \"").concat(message, "\"."));
}
make_shirt(); // Default large and message
make_shirt("Medium"); // Default message, medium size
make_shirt("Small", "Dive into Coding"); // Custom message, small size
