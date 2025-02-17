console.log("What a loopy day!");

// Loops!
// A loop is a bit of code which will repeat until it meets its stop function.
// IMPORTANT!!!!!
// IMPORTANT!!!!!
// Make sure your loop has a stop function.

let counter = 0;

// Here's a while loop
while (counter < 10) {
  console.log("While counter is: ", counter);
  // It's very important that you give the loop a way to exit/finish!
  counter = counter + 1; // counter++ is the shorthand
}

console.log("I have exited the loop! I am free!");

// Here's a for loop
// first, we tell the code 'heres a for loop'
// Next, we instantiate a variable to use as a check/counter; in this case: i
// Next, we give a condition to check: i is less than ten
// Finally, we tell it what to do when the code in the loop has executed: increment i by 1
for (let x = 0; x < 10; x++) {
  console.log("The For counter is: ", x);
}

// console.log(i); // this log breaks the code because 'i' is scoped to the for loop

// How we can use for loops to interact with arrays:

const classMembers = [
  "Frankie",
  "Bertie",
  "Tim",
  "Jez",
  "James",
  "Angelica",
  "Manny",
  "Joe",
  "Sam",
];
// The below 8 lines are repetitive code and we can make life way simpler for ourselves
console.log("Hello ", classMembers[0]);
console.log("Hello ", classMembers[1]);
console.log("Hello ", classMembers[2]);
console.log("Hello ", classMembers[3]);
console.log("Hello ", classMembers[4]);
console.log("Hello ", classMembers[5]);
console.log("Hello ", classMembers[6]);
console.log("Hello ", classMembers[7]);

console.log("The length of the array is: ", classMembers.length);
// We can use a 'for loop' instead, with a dynamically changing variable, "i", and use that to achieve our goal instead.
for (let i = 0; i < classMembers.length; i++) {
  console.log("The value of i is", i);
  console.log("Hello ", classMembers[i]);
}

// There are a couple more you should know about, but probably will use less often:

// Here is a 'do while' loop:
let doCounter = 0;
do {
  console.log("DoWhile counter is:", doCounter);
  doCounter++;
} while (doCounter < 10);

// Here is a 'for of' loop:
for (const person of classMembers) {
  console.log("The 'for of value' is:", person);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbersArray) {
  console.log("The current number is:", number);
}
