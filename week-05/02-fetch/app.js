console.log("Fetch!");

// The following URL is the location I will be making a fetch request towards
// https://jsonplaceholder.typicode.com/posts

// A function which makes a request to an API:
async function makeFetchRequest() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("The response is:", response);
  // 'response' by itself isn't too useful. We want the data contained in the response.

  // We need to 'parse' the response
  const data = await response.json();
  console.log("The data is:", data);
}

// Invoke!
makeFetchRequest();

// Lets make a fetch request to the Fox API, and when we get a response, let's render that on our webpage.
// First of all, I need a function which makes a request to the API:
async function makeFoxFetchRequest() {
  const response = await fetch("https://randomfox.ca/floof/"); // This fetch() this goes and gets the data from a location.
  const data = await response.json(); // This .json() thing gives us the data that we actually need.
  console.log(data);

  return data;
}

// Now we need some functions which add the fox to our page, with DOM manipulation
// And also a function, which ties it all together.
const foxContainer = document.getElementById("fox-container");
function displayFox(foxResponse) {
  // take an object
  // create an <img> element
  // assign the objects image property to the <img> src
  // append it to the page
  foxContainer.innerHTML = "";
  const newImg = document.createElement("img");
  newImg.src = foxResponse.image;
  newImg.alt = "A nice fox";
  foxContainer.appendChild(newImg);
}

// The function to tie it all together:
async function getFoxesOntoPage() {
  const foxObject = await makeFoxFetchRequest();
  displayFox(foxObject);
}

const refreshBtn = document.getElementById("fox-refresher");
refreshBtn.addEventListener("click", function () {
  getFoxesOntoPage();
});

getFoxesOntoPage();
