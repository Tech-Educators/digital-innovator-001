const input = document.querySelector("input");
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
const anchor = document.querySelector("a");
console.log(input);
console.log(button);
console.log(textarea);
console.log(anchor);

input.addEventListener("focus", function () {
  console.log("The input has been focused");
});

button.addEventListener("focus", function () {
  console.log("The button has been focused");
});

textarea.addEventListener("focus", function () {
  console.log("The textarea has been focused");
});

anchor.addEventListener("focus", function () {
  console.log("The anchor has been focused");
});
