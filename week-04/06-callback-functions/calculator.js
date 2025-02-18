function add(a, b) {
  console.log(a + b);
}

function multiply(a, b) {
  console.log(a * b);
}

// we expect 3 arguments
// the first 2 should be numbers
// the 3rd should be a function
// which makes it a callback function
function calculator(input1, input2, operator) {
  operator(input1, input2);
}

calculator(19, 3, add); // 22
calculator(4, 5, multiply); // 20
