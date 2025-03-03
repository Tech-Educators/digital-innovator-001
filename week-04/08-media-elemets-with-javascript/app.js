console.log("Hello Moto!");

// Goal number 1:
// Have my javascript select my 'play button' - DONE
// Add an event listener to it which detects a click - DONE
// When a click is detected, play the music! - DONE!
const playButton = document.getElementById("playButton");
const electronicMusic = document.getElementById("electronic-music");

// console.log(playButton);
console.log(electronicMusic);

playButton.addEventListener("click", function () {
  console.log("Play button has been clicked"); // this console log is just to check if things are working correctly
  electronicMusic.play(); // the play() method has zero parameters, so the brackets are empty. The function has simply been told to run.
});

// Lets do one more together:
// Lets make a pause button
// We need a button in our HTML - DONE
// We need to select it in our JS - DONE
// We need to add an event listener to the button - DONE
// Which when clicked, pauses electronicMusic
const pauseButton = document.getElementById("pauseButton");

pauseButton.addEventListener("click", function () {
  console.log("Pause button clicked");
  electronicMusic.pause();
});

const currentTimeDisplay = document.getElementById("currentTime");

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
electronicMusic.addEventListener("timeupdate", function () {
  currentTimeDisplay.textContent = formatTime(electronicMusic.currentTime);
});
