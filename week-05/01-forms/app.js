console.log("Forms, woo!");

const checkboxInput = document.getElementById("showPassword");

checkboxInput.addEventListener("click", function () {
  showPassword();
});
// another way to write an anonymous function, using the 'arrow' syntax:
// checkboxInput.addEventListener("click", () => showPassword());

function showPassword() {
  const myInput = document.getElementById("password");
  console.log(myInput.type);

  if (myInput.type === "password") {
    myInput.type = "text";
  } else {
    myInput.type = "password";
  }
}

// I need to first select my form from the document:
const myForm = document.getElementById("form");

// This function is invoked when the 'submit' event happens:
function handleSubmit(event) {
  event.preventDefault(); // this line here, preventDefault, stops the page from refreshing and also prevents the data from being pushed into the URL
  console.log("I have been submitted");

  // We can access the entire submit 'event':
  //   console.log("The event is", event);

  // but, what we are interested in is the users 'values'.
  // We access the 'event', then the target which is the form
  // then, we name the input we want, and show it's 'value':
  console.log("Username", event.target.username.value);
  console.log("Password", event.target.password.value);
}

// I need to add an event listener to my form:
// All functions which are used as an event handler will automatically be passed the 'event'
myForm.addEventListener("submit", handleSubmitWithFormData);

// Another way to access values in our form, using FormData object:
function handleSubmitWithFormData(event) {
  event.preventDefault();

  // You do not need to remember these two lines of code. You do not need to memorise them.
  // You just need to know they exist, and maybe remember, where to find them:
  const data = new FormData(myForm);
  const formValues = Object.fromEntries(data);

  console.log("The form values are", formValues);

  console.log("The email is", formValues.email);
}
