console.log("I am connected and waiting for instructions captain!");

// Here's a clue for solving how to get buttons to change the main image on the page.
// It's absolutely a stretch goal
let imageIndex = 0; // currently this will do nothing, but maybe you'll need it!

// I need a main background image
// I need a thumbnail "list" of images which the user can click, to switch the main background image
// I need event listeners on my images so that the background changes to it.
// I need a function which handles changing the main image.

// I need to select those <div> elements from my HTML:
const thumbnailContainer = document.getElementById("thumbnail-container");
const backgroundImage = document.getElementById("background-image");

// I need a variable, which holds information about my images.
// It's going to be an array, containing objects
const images = [
  {
    src: "./assets/unsplash-one.jpg",
    alt: "a blue and yellow image of space",
  },
  {
    src: "./assets/unsplash-two.jpg",
    alt: "an image of space with lots of stars, and the deep galaxy",
  },
  {
    src: "./assets/unsplash-three.jpg",
    alt: "more space!",
  },
  {
    src: "./assets/unsplash-four.jpg",
    alt: "more space!",
  },
  {
    src: "./assets/unsplash-five.jpg",
    alt: "more space!",
  },
];

// I need to get my thumbnails displayed on my page.
// I'm going to create a function, which will run on page load.
// It will use a loop. In this loop, the images in the array will be appended to the thumbnailContainer
function createThumbnails() {
  console.log("createThumbnails invoked!");

  for (let i = 0; i < images.length; i++) {
    // console.log("Iteration:", i);
    // this loop is going to add our thumbnail images to the page one by one
    // create a new image element
    const imgTag = document.createElement("img");

    // these next console logs show how I can access items in the array:
    // console.log(images[i]);
    // console.log(
    //   "we have dynamic (changing) access to each image src",
    //   images[i].src
    // );
    // console.log(
    //   "we also have changing access to each image alt",
    //   images[i].alt
    // );

    // our new img element, needs a src and an alt:
    imgTag.src = images[i].src;
    imgTag.alt = images[i].alt;

    // the last thing I would need to do, before appending the image to the page, is add an event listener so that when clicked, it changes the background image.
    imgTag.addEventListener("click", function () {
      // console.log("Image clicked", images[i].src); // this log lets us check our listener is functioning
      // next, we need to invoke a function which changes our background image.
      // We'll dynamically "pass in" the current object of the array:
      createBackgroundImage(images[i]);
    });

    // we need to append it to the page
    // we need to target the thumbnail container
    // we need to APPEND a CHILD to it :-)
    thumbnailContainer.appendChild(imgTag);
  }
}

// this function creates the big main background image.
// it takes a parameter - which is the object from the array
function createBackgroundImage(currentImage) {
  backgroundImage.innerHTML = ""; // this line of code selects the background-image div, and clears it of whatever is in there.
  console.log("The thing passed in is", currentImage);

  // create a new image
  const bigImgTag = document.createElement("img");

  // set the src and alt
  bigImgTag.src = currentImage.src;
  bigImgTag.alt = currentImage.alt;

  // add the new big image to the page
  backgroundImage.appendChild(bigImgTag);
}

// This calls the function which creates the thumbnails
createThumbnails();
// You can also call the createBackgroundImage function; you'll just need to pass it an object from the array.
