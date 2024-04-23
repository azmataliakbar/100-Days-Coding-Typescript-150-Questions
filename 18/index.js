/*
!Question 18: Seeing the World: Think of at least five places you’d like to visit.
 */
/*
todo=> Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("\nOriginal order:", places);
console.log("\nAlphabetical order:", __spreadArray([], places, true).sort());
console.log("\nOriginal order:", places);
console.log("\nReverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("\nOriginal order:", places);
places.reverse();
console.log("\nReversed order:", places);
places.reverse();
console.log("\nOriginal order:", places);
places.sort();
console.log("\nAlphabetical order:", places);
places.reverse();
console.log("\nReverse alphabetical order:", places);
