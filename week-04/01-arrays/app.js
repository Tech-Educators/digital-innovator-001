console.log("i can see whats happening!");

// An array is an ordered collection of data
// An array can store multiple values under a single variable name

let colours = ["blue", "red", "orange"];

console.log(colours);

// lets have a look at how to access individual items in an array:
console.log(colours[0]); // Outputs 'blue'
console.log(colours[2]); // Outputs 'Orange'
console.log(colours[10]); // Outputs 'undefined' because there is no value at position 10.

// Adding an item to the end of the array:
colours.push("purple");
console.log("After one item in push(): ", colours);
// We can 'push' two values at a time if we want!:
colours.push("tomato", "magenta");
console.log("After 2 items in push(): ", colours);

// Adding an item to the start of the array:
colours.unshift("yellow");
console.log("After unshift(): ", colours);

// Removing an item from the start of the array:
colours.shift();
console.log("After shift():", colours);

// Removing an item from the end of the array:
colours.pop();
console.log("After pop():", colours);

// Add an item at a specific index in an array:
// Add brown between red and orange:
colours.splice(2, 0, "brown");
console.log("After splice():", colours);

// splice() takes 3 parameters: indexStartPoint, numberOfItemsToDelete, itemToAdd
// lets now delete 'brown, orange, purple' and "splice in" 'teal'
colours.splice(2, 3, "teal");
console.log("After deleting with splice():", colours);

// Can we have arrays of numbers? Probably....
let myNumberArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Here is the array of numbers: ", myNumberArray);

// We can have arrays of mixed numbers and strings:
let myMixedArray = [10, "ten", 30, "nine", 7];
console.log("Here is the mixed array: ", myMixedArray);

// We can have arrays of arrays:
let myArrayOfArrays = [
  [5, 10, 15, 20],
  ["five", "ten", "fifteen", "twenty"],
  [50, "one hundred", 150],
];

console.log("Here is the array of arrays: ", myArrayOfArrays);
// We can access a position inside of an array, even if that array is in an array (too many array words)
console.log(
  "Here is that weird thing where we access the array of strings, then, access the value at position 3: ",
  myArrayOfArrays[1][3]
);

// Finally, we can have an array of pre-defined variables:
let myArrayOfVariables = [colours, myNumberArray];
console.log("Here is the array of pre-defined variables: ", myArrayOfVariables);
