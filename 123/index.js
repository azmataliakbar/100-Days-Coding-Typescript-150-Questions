/*
!Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
*/
// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break; // Stops the loop at the first vowel found
        }
        console.log("\n", char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("trqwsdfcxzEKJ"); // Logs 't', 'r', 'q', 'w', 's', 'd', 'f', 'c', 'x', 'z' and then 'First vowel found: E'
export {};
//? Demonstrates iterating through a string and stopping at the first vowel.
