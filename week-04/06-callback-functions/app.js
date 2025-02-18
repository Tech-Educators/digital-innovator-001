const buttonOne = document.getElementById("btnOne");

buttonOne.addEventListener("click", function () {
  console.log("Woah there, this is very cool!");
});

/*
we can see that addEventListener is a funciton
it takes two parameters
the first is a string
the second is a function
THAT MEANS the second param is a callback function

addEventListener(event, cbf)
*/

const buttonTwo = document.getElementById("btnTwo");

function changeBG() {
  document.body.style.backgroundColor = "tomato";
}

buttonTwo.addEventListener("click", changeBG);
