/*
!Question 32: Checking Usernames: Ensure uniqueness in usernames.
  */

/*
todo=> Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.
*/

let current_users: string[] = ["Amin", "ADMIN", "Asharib", "Basit", "Dawood"];
let new_users: string[] = ["amin", "Farooq", "Hamid", "admin", "Khalid"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`\n${newUser} will need to enter a new username.`);
    } else {
        console.log(`\n${newUser} is available.`);
    }
});