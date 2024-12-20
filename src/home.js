// Array of image URLs for the slider
const images = [
  "./images/img1.jpg",
  "./images/img8.jpg",
  "./images/img7.jpg",
  "./images/img4.jpg",
  "./images/img6.jpg",
  "./images/img5.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img9.jpg",
  "./images/img10.jpg",
];

// Get the image container
const containerNav = document.querySelector(".container-nav img");

// Initialize variables for the image index
let currentIndex = 0;

// Function to update the image
function updateImage() {
  // Increment index and loop back if it exceeds the array length
  currentIndex = (currentIndex + 1) % images.length;

  // Apply the new image with a fade-in effect
  containerNav.style.opacity = 0; // Start with opacity 0
  setTimeout(() => {
    containerNav.src = images[currentIndex]; // Update the image source
    containerNav.style.opacity = 1;
    containerNav.style.transition = "opacity 1s ease-in-out";
  }); 

  let sign= document.querySelector(".sign")
  sign.style.color="black"
  sign.style.backgroundColor="yellow"
}

// Set an interval to change the image every 3 seconds
setInterval(updateImage, 2000);
