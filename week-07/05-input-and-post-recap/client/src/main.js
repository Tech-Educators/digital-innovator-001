console.log("Is it working?");
// I need to
// TICK use getElementById to get my form element
// TICK add an event listener for a submit on the form
// TICK! stop the page from refreshing, and stop the form stuff going in the URL

const messageForm = document.getElementById("messageForm");

messageForm.addEventListener("submit", handleSubmit);

// In this function, I need to
// retrieve the input values; the username and the message
// I need to do something with them, IE send them to my server
// When I'm sending things to my server, I use a particular HTML protocol. It's not GET.....
async function handleSubmit(event) {
  event.preventDefault();

  // Here's method number one for retrieving your form values
  console.log(event.target.username.value);
  console.log(event.target.userMessage.value);

  const username = event.target.username.value;
  const userMessage = event.target.userMessage.value;

  console.log(username, userMessage);

  // Here's method number two for retrieving your form values
  // This is the the method you should know where to find, not to memorise!
  const data = new FormData(messageForm);
  const formValues = Object.fromEntries(data);

  console.log("Our form values:", formValues); // formValues is an object
  // Which means that we can access our username and userMessage with dot notation
  console.log(formValues.username, formValues.userMessage);

  // Next thing we need to do is send our form data to our server:
  const response = await fetch("http://localhost:8080/messages", {
    // extra information
    method: "POST", // we need to explicitly tell our code to make this request a POST request
    body: JSON.stringify({ username: username, userMessage: userMessage }), // this is the place where we package up the data we want to send to the server; in this case, our form data
    headers: {
      "Content-Type": "application/json",
    },
  });
  const serverData = await response.json();

  console.log("Client response from server is", serverData);
}
