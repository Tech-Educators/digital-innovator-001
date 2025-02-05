console.log("Events are here!");

// What we've used so far
// alert("Woah!");
// prompt("What is your name?");

// But we want to use events, to handle user input

// Anatomy of an event handler -
// Access the DOM element: myButton
// Add an event listener: .addEventListener()
// Inside of the parenthesis, add the event to be listened for, and the function to be invoked when it happens: ("click", function(){.....})

let count = 0;
// First I need to grab my <p> tag from my HTML
const myCounter = document.getElementById("my-counter");
console.log(myCounter.textContent);
// Next I need to grab my button from my HTML
const myButton = document.getElementById("my-button");
// Next, we need an 'event handler' to listen for the event we want, and to do something when the event happens
myButton.addEventListener("click", function () {
  console.log("Button has been clicked");

  //count++; // add 1 to the current variable value. This is the same as saying: count = count + 1
  count = count + 2;

  console.log(count);
  // Finally we amend myCounter with the new value of count
  myCounter.textContent = `The current count is ${count}`; // displays it on the page.
});

// Alternatively, we can declare a function, and then use it in our event listener:
// This function checks: if count is less than 10, keep counting. Otherwise, don't count any more!

// function increaseCount(){
//      if (count < 10) {
//          count++
//      }
//  // Otherwise, stop counting
// }

// myButton.addEventListener("click", increaseCount)

// Changing the background colour with a button, and a defined function:
const redBackgroundButton = document.getElementById("red-button");

function changeBackgroundToRed() {
  document.body.style.backgroundColor = "red";
}

redBackgroundButton.addEventListener("click", changeBackgroundToRed);
