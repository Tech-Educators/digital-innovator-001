//import the express package from the node_modules
import express from "express";

//initialise the Express server
const app = express();

//we need to tell our Express server what type of data we will be processing here --> JSON
app.use(express.json());

//JSON --> a way to store and use data in stringified key-value pairs

//we need to tell our server where to exist --> set up a local host for our server
//The listen method needs two arguments: the port number, and a callback function
//a method is a function stored in an object
app.listen(8080, function () {
  console.log("Server is running in port 8080");
});

// const express = {
//   key: "value",
//   key: "value",
//   key: "value",
//   use: function () {},
//   listen: function () {},
//   json: function () {},
// };

//To run our server, we need to use Node.

//====================================================================

//I want to set up a route to READ data --> GET
//Usually the first route we set up is the root route --> the first route we will see when we navigate to our server's location
//The root route is represented by /
app.get("/", function (request, response) {
  //this is the task we want to perform in this route
  //here you can read data from APIs, databases...
  response.json({
    message: "This is the root route, the main hub of our server",
  });
});

//Example of another GET route (it's a template, not functional)
//I want to set up a route to READ data --> GET
// app.get("/api/data", async function (request, response) {
//   const result = await fetch("url");
//   const data = await result.json();
//   response.json(data);
// });
