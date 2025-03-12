import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

// Don't worry about understanding these 4 lines. They're just template things we need for our server to work:
const app = express(); // we instantiate express and assign it to a variable
app.use(cors());
app.use(express.json());
dotenv.config();

// this line starts, or instantiates, the OpenAI stuff we need, and gives it our unique key
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.get("/", function (request, response) {
  response.json("This is just the get endpoint. Move along please");
});

// We are accessing the contents of the request through dot notation.
// It would look similar to this (but with more stuff):
// const request = {
//     method: "",
//     headers: "",
//     body: {
//         prompt: "Give me ten words about nature"
//     }
// }

app.post("/chat", async function (request, response) {
  const prompt = request.body.prompt;
  console.log("on the server, the prompt:", prompt);

  // This next line is what the server sends back. For now it's just the prompt:
  response.json(prompt);
});

app.listen(8080, function () {
  console.log("Running on port 8080");
});
