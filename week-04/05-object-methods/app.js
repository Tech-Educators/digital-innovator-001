console.log("Methods and things");

// We have got a variable, declared as an object, with { } curly brackets
const person = {
  // The object has got key:value pairs like we've seen. Strings and numbers
  firstName: "John",
  lastName: "Doe",
  age: 24,
  location: "London",
  id: 5566,
  // But now we're seeing a key:value pair where the value is a function! Woah!
  fullName: function () {
    // This function 'returns' a bunch of stuff
    // 'this' refers to the current object
    // '.firstName' refers to the 'firstname' item on the current object
    return this.firstName + " " + this.lastName;
  },
  getAge: function () {
    return this.age;
  },
  getLocation: function () {
    return this.location;
  },
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);
console.log("Im using the fullName method:", person.fullName());
console.log("Im using the getAge method here:", person.getAge());
console.log("Im using the getLocation method here:", person.getLocation());

// Lets create a few objects of our own, with methods on them

const frankiesCar = {
  owner: "Frankie",
  colour: "grey",
  model: "ford focus",
  engineSize: 1.5,
  price: 4000,
  // when we invoke the noise method, it will console log something for us
  noise: function () {
    // in this console log, we use 'this' to access the current owner and model
    console.log(`${this.owner}s ${this.model} goes putt putt putt`);
  },
};

const joshsCar = {
  owner: "Josh",
  colour: "grey",
  model: "Audi Q5",
  engineSize: 2,
  price: 8000,
  noise: function () {
    console.log(
      `${this.owner}s ${this.model} normally goes vroom vroom vroom, but currently goes putt putt putt!!`
    );
  },
};

const sandipsCar = {
  owner: "Sandip",
  colour: "dark blue",
  model: "Audi A5",
  engineSize: 2,
  price: 8000,
  noise: function () {
    console.log(
      `touch wood, everything is fine, and ${this.owner}s ${this.model} goes VROOOOOOOOOMMMMWHEEEEEEEEE!!!!`
    );
  },
};

frankiesCar.noise();
joshsCar.noise();
sandipsCar.noise();
