/*
!Question 32: Checking Usernames: Ensure uniqueness in usernames.
  */
/*
todo=> Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.
*/
var current_users = ["Amin", "ADMIN", "Asharib", "Basit", "Dawood"];
var new_users = ["amin", "Farooq", "Hamid", "admin", "Khalid"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("\n".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("\n".concat(newUser, " is available."));
    }
});
