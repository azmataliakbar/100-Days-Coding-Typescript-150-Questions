/*
!Question 39: City Names: Formatting city-country pairs.
  */

/*
todo=> Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.
*/



function city_country(city: string, country: string): string {
  return `\n${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));