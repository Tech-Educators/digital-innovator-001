// Variables
const myName = "Frankie";
const num1 = 100;
const num2 = 500;

// What we're used to with writing functions:
function sum(a, b) {
  return a + b;
}

// New Arrow Function syntax.
// we start with the 'const' keyword.
// because we have two parameters (things given in), they have to be in a set of regular parenthesis:
const sumTwo = (a, b) => {
  return a + b;
};

console.log(sum(num1, num2)); // Invoking is press play on the function
console.log(sumTwo(100, 500));

// however, with Arrow Functions, if we just have one single parameter, we don't need the set of regular parenthesis:
// Prettier is gonna pretty....but notice we don't have the curly braces in our functions code block:
const greetings = (username) => console.log(`Hello, ${username}!`);
greetings("Bertie");

// Let's have a look at an event listener:
// Regular style
myButton.addEventListener("click", function () {
  count = count + 1;
});

// Arrow style
myButton.addEventListener("click", () => {
  cont = count + 1;
});

// There is no Gangnam Style for functions.

// The difference between the two is like this:
// function(){}
// () => {}
