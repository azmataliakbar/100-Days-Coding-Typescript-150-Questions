/*
!Question 150: Describe how asynchronous callbacks differ from synchronous code execution. */
/*
todo=> Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.
  */
// Synchronous example
console.log("\n", "Before synchronous operation"); //? this code will print in normal timing
// Simulate a synchronous blocking operation
for (var i = 0; i < 1e9; i++) { } // A long loop
console.log("\n", "After synchronous operation"); //? this code will print in normal timing
// Asynchronous example
console.log("\n", "Before asynchronous operation"); //? this code will print in normal timing
setTimeout(function () {
    console.log("\n", "Asynchronous operation completed"); //? this code will print in normal timing
}, 5000);
console.log("\n", "After asynchronous operation setup"); //! this code will print with delay, depend on timer setting
//? Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
