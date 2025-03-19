// Standard express server setup
import express from "express";
const app = express();
const PORT = 8080;

// Lets make an array of movie objects
const movies = [
  { title: "Wonka", year: 2023 },
  { title: "Gladiator", year: 2000 },
  { title: "Barbie", year: 2023 },
  { title: "Game of Thrones", year: 2026 },
];

// Standard GET route
app.get("/", function (request, response) {
  response.json({
    message: "You are in my rooticle routicle, careful of your stepsicles.",
  });
});

// A GET route which takes a query string
// We've defined it as a 'movies' endpoint, so that we can search our movies by year
app.get("/movies", function (request, response) {
  // This is how we acces the query string
  console.log("Current query is", request.query); // Output: { movieYear : '2023 }
  // We assign the query string object to a variable
  const queryYear = parseInt(request.query.movieYear); // Here, we use parseInt() to convert the string to a number, so it matches our array

  // we need to filter our movies to return only the ones from that particular year.
  // we use a javascript method called .filter():
  const filteredMoviesByYear = movies.filter(function (movie) {
    // it 'loops' through our array, and only returns the current movies year if it matches the year in our query string
    return movie.year === queryYear;
  });

  response.json(filteredMoviesByYear);
});

// Another example
const products = [
  { title: "Lip gloss", price: 50, category: "beauty" },
  { title: "Foundation", price: 50, category: "beauty" },
  { title: "ear buds", price: 75, category: "sanitary" },
  { title: "headphones", price: 290, category: "electronics" },
  { title: "Kawasaki motorcycle", price: 10000, category: "motorcycles" },
  { title: "hopes & wishes", price: 9000, category: "health" },
  { title: "towel", price: 5, category: "home" },
];
// A GET route for our products so that we can query them
app.get("/products", (req, res) => {
  console.log("Products query is", req.query);

  const queryCategory = req.query.category;

  const filteredProductsByCategory = products.filter(function (thisProduct) {
    console.log("The current product is:", thisProduct);
    console.log(
      `Does ${thisProduct.category} match ${queryCategory}? If true, it will be returned. If false, it wont!`
    );
    return thisProduct.category === queryCategory;
  });

  res.json(filteredProductsByCategory);
});

// Standard listener
app.listen(PORT, function () {
  console.log(`Server running away for ${PORT} miles`);
});
