// My standard boilerplate/template imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
// My standard boilerplate/template server setup
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = 8080;

// Here is where I am establishing a connection to my database. 'db' is going to let my run queries to my database, woohoo!
const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

// Standard GET endpoint:
app.get("/", function (request, response) {
  response.json(
    "You are on my root route, careful where you step, my roots are sensitive!"
  );
});

// async GET endpoint for when our client wants all the jokes in our table:
app.get("/alljokes", async function (request, response) {
  // declare a variable, and make a db.query to get all the jokes!
  const allJokes = await db.query(`SELECT * FROM jokes_001`);
  console.log("allJokes response is", allJokes);
  // send back just allJokes.rows, because that's all the client needs,
  // an array of objects:
  response.json(allJokes.rows);
});

// an async POST endpoint, so we can add new jokes to our database:
app.post("/jokes", async function (request, response) {
  // getting the user submitted data:
  console.log("Server request", request.body);
  const newJoke = request.body;

  // making a db.query to our database.
  // this time we're aiming to insert data into the database.
  // we use "parameterised values", which means...
  // db.query() gets given two parameters; the 'SQL query' and [an, array, of, values]
  // in the 'SQL query' we use a dollar-sign and a number as a placeholder:
  const dbResponse = await db.query(
    `
    INSERT INTO jokes_001 (title, question, punchline) 
    VALUES ($1, $2, $3)`,
    [newJoke.jokeTitle, newJoke.jokeQuestion, newJoke.jokePunchline]
  );

  console.log("The database response is", dbResponse);
});

// finally here, we've just got a standard app.listen for our server to see requests
app.listen(PORT, function () {
  console.log(`The server is running on ${PORT}`);
});
