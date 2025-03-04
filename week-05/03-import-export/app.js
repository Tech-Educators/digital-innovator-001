// Import
// First, you start with the 'import' keyword.
// Then, within curly braces, we use the exact name of the exported thing we want, in this case 'multiply'.
// We say we want it 'from' a location.
// and that location must be: in "double quotes", hav a file pathway, and end in the file extension = .js
import { multiply } from "./functions.js";
import { x, y, myName } from "./variables.js";
import { increaseCount, count } from "./counter.js";

// get the elements from our HTML:
const myNameH1 = document.getElementById("my-name");
const myBookDiv = document.getElementById("my-books");

const myCount = document.getElementById("my-counter");
const myButton = document.getElementById("my-button");

// What we're used to:
const num1 = 10;
const num2 = 15;

function sum(a, b) {
  return a + b;
}

console.log(sum(num1, num2));

// Using a function from another file
console.log(multiply(num1, num2));

// Using variables from another file
console.log(sum(x, y));
console.log(multiply(x, y));

// We can do all of the usual stuff we're used to, like
// DOM manipulation
myNameH1.textContent = `${myName} Import Export stuff`;

// Let's look at a counter
myCount.textContent = count;

myButton.addEventListener("click", function () {
  console.log("the button is clicked:", count);
  // Everytime the button is clicked, increase the counter by 1
  increaseCount();
  console.log("The function has finished running", count);
  // and update the value on the page
  myCount.textContent = count;
});
