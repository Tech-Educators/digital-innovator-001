console.log("Time for funsies!");

const allJokes = document.getElementById("allJokes");

// I need a function which gets all the jokes from my server:
async function fetchJokes() {
  // I do a standard fetch() request, but to one of my server end points:
  const response = await fetch("http://localhost:8080/alljokes");
  const allJokesData = await response.json();
  // I'm just console.logging for now, but I would perform some DOM manipulation in a loop for render the jokes on my page:
  console.log(allJokesData);
}
fetchJokes();

// And we already handle submitting jokes, from our last demo:
const jokeForm = document.getElementById("jokeForm");
jokeForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(jokeForm);
  const formValues = Object.fromEntries(data);

  console.log("Our form values:", formValues);

  const serverResponse = await fetch("http://localhost:8080/jokes", {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const serverData = await serverResponse.json();

  console.log("Client response from server is", serverData);
}
