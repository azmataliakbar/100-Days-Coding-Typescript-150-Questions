/*
!Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
*/

/*
todo=> Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.
 */

//? Example use of the 'await' reserved word in asynchronous JavaScript

// Simple function that returns a Promise
function fetchSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate fetching data
      const data = "\nFetched Data";
      resolve(data); // Resolve the Promise with the data
    }, 2000); // 2-second delay
  });
}

async function fetchData() {

  // Assuming fetchSomething returns a Promise
  const data = await fetchSomething();

  console.log(data);
  // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}
// Calling the async function to start the asynchronous operation
fetchData();

console.log("\nThe 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
//? This demonstrates how 'await' improves readability and flow in asynchronous code.