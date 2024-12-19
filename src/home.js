// Array of image URLs for the slider
const images = [
  "../images/img1.jpg",
  "../images/img3.jpg",
  "../images/img5.jpg",
  "../images/img2.jpg",
  "../images/img4.jpg",
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
    containerNav.style.opacity = 1; // Fade back to full opacity
  }, 500); // Duration of the fade-out
}

// Set an interval to change the image every 3 seconds
setInterval(updateImage, 3000);
