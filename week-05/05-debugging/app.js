const justAnotherNumber = 63;

// We're going to see how using the 'debugger' pauses our code, and lets us step through what's happening, to follow the flow of logic.
function countToTen() {
  for (let i = 0; i < 10; i++) {
    console.log("i is currently:", i);
    // debugger; // the keyword 'debugger' pauses our code and lets us interact with the dev tool, to step through our code.
  }
}

// Calling countToTen:
countToTen();

// Inspecting variables and values in a sum function:
function addTogether(a, b) {
  //   debugger;
  let theTotal = a + b;
  console.log("the total is:", theTotal);
}

addTogether(10, 20);
addTogether(5, 95);

// We can also add a breakpoint in VSCode by adding the 'red dot' in the column (gutter) to the left:

function aLoopyCounter() {
  let thisCounter = 1;

  while (thisCounter < 100) {
    console.log("this counter is:", thisCounter);
    thisCounter++;
    debugger;
  }
}

aLoopyCounter();
