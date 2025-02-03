console.log("I'm conditionaling here!");

// The structure of a conditional:
// if (some kind of condition is true) {
//  do some kind of action/code
// }

// Parenthesis are these: ( )

if (3 < 10) {
  console.log("True! 3 really IS less than 10!");
}

// Will this work? Will we see the console log?
if (2 > 4) {
  console.log("Hmmmm....I'm not quite sure it is.");
} // nope!

// What will this show?
// "2 > 4" ?
let myVariable = 2 > 4;
console.log(myVariable); // Outputs: false

let x = 15;
let y = 10;

if (x > y) {
  console.log("It's true! It's bigger than the other number!");
}

// A single '=' is an assignment: this 'is' that
const myAge = 71;

if (myAge >= 66) {
  console.log(
    "You are of pensionable age! Congratulations. Please collect £200"
  );
} else {
  console.log("You are not of the pension age. Keep at it");
}

// a '==' checks if the values are the same
// a '===' checks if the values are the same AND the data types are the same

if (myAge == 17) {
  console.log("You are 17, and you can get your drivers license!!");
} else if (myAge < 17) {
  console.log("You are not 17. You are younger! You have to wait!");
} else if (myAge > 17) {
  console.log("You are older than 17! Are you interested in driving?");
} else {
  console.log("Maybe you arent an age at all.....");
}

// we can also use >=
// and also <=

// A practical example of a light/dark theme toggle

let themeAnswer = prompt("Do you prefer light or dark?");
// if light, then do this, if dark then do that
if (themeAnswer === "light") {
  document.body.style.backgroundColor = "limegreen";
} else if (themeAnswer === "dark") {
  document.body.style.backgroundColor = "purple";
} else {
  document.body.style.backgroundColor = themeAnswer;
}
