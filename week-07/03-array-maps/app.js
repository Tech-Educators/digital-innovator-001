const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log("array1 is:", array1);
console.log("map1 is", map1);
// Expected output: Array [2, 8, 18, 32]

// I'm going to make an array of objects
const people = [
  { firstName: "Frankie", favColour: "orange" },
  { firstName: "Bertie", favColour: "purple" },
  { firstName: "Joe", favColour: "charteruse" },
  { firstName: "Tim", favColour: "tomato" },
];

// Here, we create a variable which is going to store just our first names. We've used an anonymous arrow function.
// The parameter we pass in, is the current item being accessed on the array (a bit like a loop!)
const allFirstNames = people.map((currentItem) => {
  // this is where we do our function code
  console.log("the current person is", currentItem);
  console.log("this persons first name is", currentItem.firstName);
  // this functions wants to return a first name
  return currentItem.firstName;
});

console.log(allFirstNames); // Output: ['Frankie', 'Bertie', 'Joe', 'Tim']

// The same thing again, but this time with colours!
// But this time we used an anonymous regular function:
const allFaveColours = people.map(function (currentPerson) {
  console.log("the current fave colour is", currentPerson.favColour);
  return currentPerson.favColour;
});

console.log(allFaveColours); // Output: ['orange', 'purple', 'charteruse', 'tomato']

// Another way to write the colour version, with the arrow function:
people.map((person) => {
  console.log("Andreis version", person.favColour);
});

const helloNames = allFirstNames.map(function (personsName) {
  return `Hello ${personsName}`;
});

console.log(helloNames);
