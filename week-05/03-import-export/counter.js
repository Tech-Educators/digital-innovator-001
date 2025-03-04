// To allow this function to work, we put the variable and the function together in one file.
// This file also has a specific purpose, being a counter, rather than being loose in a 'variables.js' or a 'functions.js'
export let count = 15;

export function increaseCount() {
  console.log("inside the function, newCount is:", count);

  return (count += 1);
}
