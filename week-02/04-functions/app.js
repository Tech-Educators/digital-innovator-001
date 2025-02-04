console.log("Functions are here");

function greet() {
  return "Hello there, General Kenobi";
}

console.log(greet());

// -- The anatomy of a function --
// First of all, similar to 'declaring' a variable, we 'declare' that a function is being written: function
// Next, we give our function a descriptive 'name': greet
// Next, we need to write parenthesis: ()
// We write those because our function can take 'parameters' ooooOOOOOooo
// After, we use curly braces: { }
// Curly boys give us a space to write the code which will be executed

// Lets have a look at using parameters, and invoking functions

function sayHello(username) {
  console.log("Hello", username);
}

sayHello("Bertie");
sayHello("Naumaan");

// Calculations
// Adding function
// This way of doing things is INSANE!!!!!!!!!!
// Please do not do this
function addOneToOne() {
  return 1 + 1;
}

function addOneToTwo() {
  return 1 + 2;
}

function addOneToThree() {
  return 1 + 3;
}

console.log(addOneToOne()); // the return will ALWAYS be 2
console.log(addOneToOne());
console.log(addOneToOne());

// Instead, keep your code DRY: Don't Repeat Yourself.
// Try to create a dynamic function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 4));
console.log(add(29, 47));
console.log(add(5, 10));

// check out our Figma board for a visual on the flow of this
const myNumber = add(50, 100);
console.log(myNumber);

// We can do a bunch of code in our function
function multiply(number1, number2) {
  console.log("I am multiplying");

  let theProduct = number1 * number2;

  console.log("I have multiplied!");
  console.log("The result of your request is ", theProduct);
  console.log(
    "Because I am a hard working function, here are your two numbers added together!",
    add(number1, number2)
  );
  //   return theProduct;
}

multiply(100, 36);
