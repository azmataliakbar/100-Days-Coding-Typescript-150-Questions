/*
! Question 38: Cities: Describing cities with a function.
 */
/*
todo=> Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.
*/
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
