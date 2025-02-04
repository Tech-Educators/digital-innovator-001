// console.log("Hey, I'm scoping here!");

// Globally Scoped Variables:
let counter = 0;
const theCurrentUser = "Jez The Fortune Teller";

console.log(counter, theCurrentUser);

// Use 'const', until you realise it needs to be a 'let'.
// You can change a 'let', but 'const' remains the same:
counter = counter + 1; // counter is now 1
counter = counter + 2; // by the end of this line, counter is now 3
console.log(counter);
counter = 100;
console.log(counter); // Output:
// theCurrentUser = "Bertie The Great"; // our code 'breaks' here and stops running.

// Accessing a globally scoped variable, INSIDE of a function block
function increaseCounter() {
  console.log("increaseCounter has been invoked");
  counter++; // this is another way of writing: counter = counter + 1;
  console.log(counter);
}
// Changed which happen to a globally scoped variable affect when they're accessed locally.
increaseCounter();

function changeCounter() {
  counter = 505;
}
changeCounter();
console.log(counter);

increaseCounter();
increaseCounter();
increaseCounter();

if (1 > 0) {
  let myScopedToIfVariable =
    "I can only be accessed inside of this if statement";
  console.log(myScopedToIfVariable);
}
// console.log(myScopedToIfVariable); // this console log will error, because the myScopedToIfVariable is scoped to the if statement.
// console.log("You can't see me!!!");
