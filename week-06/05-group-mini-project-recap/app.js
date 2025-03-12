const changeToRed = document.getElementById("changeToRed");

// when I click the button:
changeToRed.addEventListener("click", function () {
  // I want the boxs' background to change to red:
  const containerOne = document.getElementById("containerOne");
  containerOne.style.backgroundColor = "red";
});

// I need a loop which appends divs and buttons onto the page.
// This probably needs to be a function which runs when the page loads.
// I might need an array, so that I can define the colours available to the buttons. Or maybe I'll just do it in the loop
// I need to append the results to the page somewhere.

const buttonArray = [
  {
    buttonId: 1,
    buttonColour: "red",
  },
  {
    buttonId: 2,
    buttonColour: "blue",
  },
  {
    buttonId: 3,
    buttonColour: "orange",
  },
];

const parentBox = document.getElementById("parentBox");
// The function:
function makeBoxes() {
  for (let i = 0; i <= 2; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "container";
    newDiv.id = `mini-container-${i}`;

    parentBox.appendChild(newDiv);

    const buttonRed = document.createElement("button");
    const buttonBlue = document.createElement("button");

    buttonRed.addEventListener("click", () => {
      changeColour("red", newDiv);
    });
    buttonBlue.addEventListener("click", () => {
      changeColour("blue", newDiv);
    });
    newDiv.appendChild(buttonRed);
    newDiv.appendChild(buttonBlue);
  }
}

// I want to keep my code DRY, and clean and resusable
// So I'm going to make a function which takes a colour as a parameter, and can be used in the event listener
function changeColour(colour, selectedContainer) {
  selectedContainer.style.backgroundColor = colour;
}

// Invoking the function:
makeBoxes();
