console.log("Hello World!");
// Logging the document, and the document body
console.log(document);
console.log(document.body);

// What's the difference between const and let?
// 'let' is for a variable whos value can change
// 'const' is for a variable whose value cannot change - it is 'constant'

// select an element to manipulate
const myh2 = document.querySelector("h2");
console.log(myh2);

// How do specifically target an element that we want?
const myFirstH2 = document.getElementById("first-h2");
console.log(myFirstH2);

// We actually want to manipulate them and change what they are/do
console.log("First log: " + myFirstH2.textContent);
myFirstH2.textContent = "I am such a good h2 WOO!";
console.log("Second log: ", myFirstH2.textContent);
myFirstH2.ariaLabel = "intro-h2";

// We cant to select the p tag to be removed.
// and then remove it
const removeP = document.getElementById("remove-me");

removeP.remove();
console.log("P tag removed");

// How do we add elements?
// First we declare a variable which is going to be our new element
const newImg = document.createElement("img");
// Next, we assign values to the elements attributes
newImg.src = "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4.jpg";
newImg.alt = "Look at this nice beach";
newImg.width = 300;
// We also have to select the place on the page where the new element will go
// In this case, the div with the ID image-container
const myImageContainer = document.getElementById("image-container");
// Finally we append the newImg as a child to the myImageContainer
myImageContainer.appendChild(newImg);
