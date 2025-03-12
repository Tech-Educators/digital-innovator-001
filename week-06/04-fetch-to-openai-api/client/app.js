// 1 have an event listener for when the form is submitted
// 2 run a function which interacts with our server
// 3 display the response from the GPT once it has been received

// Getting the responses div
const responsesDiv = document.getElementById("responses");

// Getting the form from our HTML
const form = document.getElementById("promptForm");
// Adding an event listener to the form
form.addEventListener("submit", sendChatRequest);

// The sendChatRequest function is next:
async function sendChatRequest(event) {
  event.preventDefault();
  console.log(event.target.prompt.value);
  const prompt = event.target.prompt.value;
  console.log(prompt);

  // Now we're going to make a fetch request to where our server is running
  // also to its /chat endpoint
  // and we're going to 'await' the servers response
  const response = await fetch("http://localhost:8080/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
        prompt
    })
  });


  const data = await response.json();
  console.log("data is", data);
}
