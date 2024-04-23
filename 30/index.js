/*
!Question 30: Hello Admin: Greet users differently, especially 'admin'.
 */
/*
todo=> Explain & TIP: Loop through usernames to personalize greetings. This introduces looping and conditional logic together.
*/
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("\nHello admin, would you like to see a status report?");
    }
    else {
        console.log("\nHello ".concat(username, ", thank you for logging in again."));
    }
});
