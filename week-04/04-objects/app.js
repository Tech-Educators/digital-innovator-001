console.log("Testing Objects 1,2,3.");

// Primitive Data types we've seen so far:
const username = "Frankie"; // This is a string
const age = 31; // This is a number
const stylish = false; // This is a boolean - a true/false value
// Another data type we've seen:
const frankieFacts = [
  "Frankie",
  31,
  false,
  ["orange, blue, purple"],
  "Tech Educators",
]; // this is an array

// Arrays are nice, but they're not the whole package. We need a way to give more information to our data.
// Enter, OBJECTS!
// Objects allow us to define more meaning, with Key:Value pairs
const frankieObject = {
  firstName: "Frankie",
  currentAge: 31,
  isStylish: false,
  wantsToBeASuperhero: true,
  favouriteColours: ["orange", "blue", "purple"],
  currentEmployer: "Tech Educators",
};

// How do we access the properties of an object?
// Let's recap how we access array properties first:
console.log(frankieFacts); // Logging the whole array variable
console.log(frankieFacts[0]); // Accessing the first item, at position 0
console.log(frankieFacts[1]); // Accessing the second item, at position 1
// Accessing properties of an object. Method 01:
console.log(frankieObject["firstName"]);
// The above way is just ok........it's MUCH BETTER to use "Dot Notation":
console.log(frankieObject.currentEmployer);
console.log(frankieObject.wantsToBeASuperhero);

console.log(frankieObject.location); // this results in 'undefined' because the line of code which creates the property hasn't run yet.

// We can add items to our object:
frankieObject.location = "Nottingham";
console.log(frankieObject); // Here, we can now see "location: 'Nottingham'" in our log, because the line above has added it.

// We can update properties within our object:
frankieObject.currentAge = 45;
console.log(frankieObject.currentAge);

// You'll notice that adding items to my object, and updating items in my object, is written in the same way.
// If the item doesn't exist, it will be created. If it exists, it will be updated.

// How do we access the colour 'blue', within the favouriteColours array, within the frankieObject?
console.log("Accessing blue: ", frankieObject.favouriteColours[1]);

// A 'Real World' example of products
// We're going to the Audi store
const products = [
  {
    model: "A3",
    engineSize: 2,
    colours: ["Grey", "Black"],
    price: 10000,
  },
  {
    model: "A4",
    engineSize: 2.4,
    colours: ["Blue", "Electric Orange"],
    price: 14000,
  },
  {
    model: "A5",
    engineSize: 9,
    colours: ["Red", "Blazing Purple"],
    price: 20000,
  },
];

// Let's access the price of an A4:
// console.log(products[1]["price"]); // this works to get us the price of the A4
console.log(products[1].price); // But 'dot notation' is nicer!
// If we wanted to update the price of the A4:

products[1].price = 20000; // This is how we would update the value of the A4's price
console.log(products[1].price);
