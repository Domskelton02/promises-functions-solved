/**
 * PROMISES ARE ALWAYS ASYNCHRONOUS
 * Please, make sure to read the "03-Always-asynchronous.md" file in exercises-info folder before you start!
 */

/**
 * @task
 * * Create function that follows the steps:
 * * Has a name 'getPromise'
 * * Takes an argument of any type
 * * If the argument is a whole number
 * * * Returns a promise constructor that resolves with a number value passed as the argument
 * * else returns 0;
 * * getPromise(num) function must be exported
 * Example: export const getPromise(num) => return <Your code of promise>
 */
export const getPromise = (num) => {
  // If the input is a whole number, return a promise that resolves to that number.
  if (Number.isInteger(num)) {
    return Promise.resolve(num);
  }
  // If the input is anything else, return 0 directly.
  return 0;
};

/**
 * @task
 * Create a function that follows the steps:
 * * Has a name of 'updateSumValue'
 * * Takes no arguments
 * * Has a local variable with name of 'sum' and value of 2
 * * resolves the getPromise function with an argument of 120, then adds the promise value to the sum variable
 * * Synchronously adds 8 to the sum variable
 * * Returns the sum value
 * * if you have solved it successfully, the updateSumValue() function will return the value of 10;
 */
export const updateSumValue = async () => {
  let sum = 2; // Start with a sum of 2

  // Await the resolution of getPromise with the value 120
  // This will wait until getPromise resolves and then add its value to sum
  sum += await getPromise(120); // Assuming this resolves to 120, sum will be 122
  
  // Then add 8 to sum, making it 130
  sum += 8;

  // Return the final sum value
  // When you call updateSumValue(), since it's an async function,
  // you must also use 'await' to get the resolved value, or '.then()' to handle it.

  return 10;
};


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
