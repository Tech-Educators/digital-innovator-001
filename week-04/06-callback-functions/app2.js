function childOne() {
  console.log("I am child one");
}

function childTwo() {
  console.log("I am child two");
}

function parent(cbf) {
  console.log("I am parent");
  cbf();
}

parent(childOne);
parent(childTwo);
