import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // which hopefully lets our client communicate with the server without being blocked. But we'll see, because CORS issues like to be fun...
const PORT = 8080; // we can also use a variable to handle our port number. This gets referenced in the listener.

// I need
// a standard GET root route
app.get("/", function (request, response) {
  // Request: is the thing which comes in.
  // Response: is the thing which gets sent back.
  response.json({ message: "This is the root route. Rice one Raggy!" });
});

// another GET route. This we will change later when we have a database connection:
app.get("/messages", function (request, response) {
  // Request: is the thing which comes in.
  // Response: is the thing which gets sent back.
  response.json({
    message:
      "This is the route where we are going to retrieve all of the messages from the database!",
  });
});

// a POST route to handle messages
// This endpoint needs to retrieve the submitted user message. How does it do?
app.post("/messages", function (request, response) {
  // We retrieve the data sent to this endpoint by diving into the request and the body:
  console.log("the request body on the messages POST route is:", request.body);
  const username = request.body.username;
  const userMessage = request.body.userMessage;

  console.log("Serverside username and message are:", username, userMessage);

  // All we're going to do for now is send back what we retrieved
  response.json({
    status: "OK WAHOO!",
    username: username,
    userMessage: userMessage,
  });
});

// a 'listen' to tell my server to listen for connections
app.listen(PORT, function () {
  console.log(`This fantastical, magical App is running on ${PORT}`);
});
