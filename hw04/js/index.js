// const showPhoto = (e) => {
//     // figure out which element the user clicked from the event object:
//     const clickedElement = e.target;
//     // figure out what its background image is:
//     const imgURL = clickedElement.style.backgroundImage;
//     console.log(imgURL);

    const showPhoto = (e) => {
        // figure out which element the user clicked from the event object:
        const clickedElement = e.target;
        console.log(e.target);
        // figure out what its background image is:
        const imgURL = clickedElement.style.backgroundImage;
        console.log(imgURL);
        document.querySelector(".featured_image").style.backgroundImage = imgURL;
        var element = document.querySelector(".preview_box")
        element.classList.add('active')

          }
    // PART 1:
    // 1. set the featured_image element's backgroundImage property
    //    to the imgURL associated with the image the user just clicked
    //    the photo the user just clicked on.
    // 2. add the active class to the preview_box element so that the card
    //    becomes visible to the user.


// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements

const cards = document.querySelectorAll('.card');
for (card of cards) {
    card.onclick = showPhoto;
    }


// PART 3: Close functionality
const closePhoto = (e) => {
    var element = document.querySelector(".preview_box");
    element.classList.remove('active');
  }

const close = document.querySelector('.close');
close.onclick = closePhoto;

// a. Create a “close” function that removes the “active” class
//    from the “.preview_box” element.
// b. Attach your newly created “close” function to the onclick
//    event handler of the close button (in the upper right-hand corner).



// PART 4: Next functionality:


var n = 0
const nextPhoto = (e) => {
  const images = document.querySelectorAll('.image');
    n = n + 1;
  if (n == images.length)
  { n = 0;}

  var imgURL = images[n].style.backgroundImage;
  document.querySelector(".featured_image").style.backgroundImage = imgURL;
  console.log(image.style.backgroundImage);
  var element = document.querySelector(".preview_box");
  element.classList.add('active');

}

const next = document.querySelector('.next');
next.onclick = nextPhoto;

const image = document.querySelector('.featured_image');
image.onclick = nextPhoto;


// a. Create a “next” function that switches out the “.featured_image”
//    background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.



// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).
//
var n = 0
const prevPhoto = (e) => {
  const images = document.querySelectorAll('.image');
    n = n - 1;
    if (n == -1)
    {
      n = images.length - 1;
    }

  var imgURL = images[n].style.backgroundImage;
  document.querySelector(".featured_image").style.backgroundImage = imgURL;
  console.log(image.style.backgroundImage);
  var element = document.querySelector(".preview_box");
  element.classList.add('active');
}

const prev = document.querySelector('.prev');
prev.onclick = prevPhoto;

const image2 = document.querySelector('.featured_image');
image2.onclick = prevPhoto;
