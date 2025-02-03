// I am a comment. I don't run. I don't do anything, other than just be a bit of text

// Here, we are accessing the console, to display some text - a string saying "Hello World"
console.log("Hello World");
console.log("I am appearing in the console! Check my out!");

// We need to declare a variable. It kind of reads like a sentence.
// let this variable be called myName, and let it be equal to "Frankie"
let myName = "Frankie";
// Here we can console.log myName and 'access' the value stored inside of it
console.log(myName);
// We can't console.log 'myname' because the variable doesn't exist
// console.log(myname);

let myLongerVariableName = "camelCase";

// Datatypes
// strings are anything which are between quotes:
// double quotes: " "
// single quotes: ' '
// back ticks: ` `
let myString = "This is my string in a double quote. Nice!";
let mySecondString = "Oh my word, a string in single quotes!";
let myBackTickString = `What is this magic?!`;
let myConfusingString = "49";
console.log(myConfusingString);
let myQuoteInAQuote = "Here's my quote: 'QUOTE!'. Nice";

console.log(myQuoteInAQuote);
console.log(myString, mySecondString);

// number - anything that's a number:
let myAge = 31;
console.log(myAge);
let score = 11;
let year = 2025;
let decimal = 2.5;
let fullMarks = 100;
let oneHundredPercent = 1;
let fiftyPercent = 0.5;
console.log(decimal);
console.log(fullMarks * fiftyPercent, "%");

// booleans are true or false. That's it.
let frankieNeedsAHaircut = true;
let frankieHasStyle = false; // I'm trying...
console.log(frankieHasStyle);

// We can create variables with other variables!
let userScore = fullMarks * fiftyPercent;
console.log("The users score is: ", userScore);
// Number versions
let x = 10;
let y = 20;
let sum = x + y; // addition
let product = x * y; // multiplying
let quotient = y / x; // dividing one by the other
let difference = y - x; // subtraction
// String versions
let str1 = "Hello";
let str2 = "World";

let concatenatedString = str1 + str2;
console.log(concatenatedString);
let concatenatedStringWithSpace = str1 + " " + str2;
console.log(concatenatedStringWithSpace);

// If we have a longer sentence, how can I make it easy for myself instead of doing these annoying pluses all the time?
// Answer: Template Literals!
// Template literals use backticks at the start and end, instead of other quotes
let myTemplateLiteral = `My string is ${str1} and ${str2}. My user score is: ${userScore}`;
console.log(myTemplateLiteral);

let myTemplateNumber = `My fancy number is: ${x + y}`;
console.log(myTemplateNumber);

// Finally, lets look at what we can't do
// A variable can be called pretty much anything, EXCEPT:
// it cannot be a Javascript reserved word, like: 'let', 'function' etc
// it cannot include special characters except for: _ and numbers
// it cannot start with a number

// We can also declare variables with the word 'const'
const myFancyNumber = 36;
console.log(myFancyNumber);
