// Selecting all "View Recipe" buttons
const recipeButtons = document.querySelectorAll(".view-recipe");

// Adding event listeners to each button
recipeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    createRecipePopup(index, button);
  });
});

function createRecipePopup(index, button) {
  // Check if a popup already exists and remove it
  const existingPopup = document.querySelector(".popup-recipe");
  if (existingPopup) {
    existingPopup.remove();
  }

  // Adding a blur effect to everything except the popup
  const contentToBlur = document.body.children;
  Array.from(contentToBlur).forEach((child) => {
    if (!child.classList.contains("popup-recipe")) {
      child.style.filter = "blur(1.5px)";
      
      child.style.pointerEvents = "none"; 
    }
  });

  // Fetch the recipe details from the button's dataset
  const recipeTitle = button.dataset.title;
  const recipeIngredients = button.dataset.ingredients.split("|");
  const recipeInstructions = button.dataset.instructions.split("|");

  // Creating the popup form
  const popup = document.createElement("div");
  popup.classList.add("popup-recipe");
  popup.innerHTML = `
    <button id="close-recipe-popup" style="float: right; background: red; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer;">X</button>
    <h3 style="font-size: 25px; text-align:center; text-decoration:wavy;">${recipeTitle}</h3>
    <h4>Ingredients:</h4>
    <ul>
      ${recipeIngredients
        .map((ingredient) => `<li>${ingredient}</li>`)
        .join("")}
    </ul>
    <h4>Instructions:</h4>
    <ol>${recipeInstructions
      .map((instructions) => `<li>${instructions}</li>`)
      .join("")}</ol>
  `;

  // Styling the popup
  popup.style.position = "fixed";
  popup.style.backgroundColor = "#ff9966";
  popup.style.padding = "10px";
  popup.style.border = "1px solid #ccc";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  popup.style.zIndex = "1000";

  // Center the popup on the screen
  const popupWidth = 400; 
  const popupHeight = 540; 
  popup.style.width = `${popupWidth}px`;
  popup.style.height = `${popupHeight}px`;
  popup.style.top = `calc(50% - ${popupHeight / 2}px)`;
  popup.style.left = `calc(50% - ${popupWidth / 2}px)`;

  // Append the popup to the body
  document.body.appendChild(popup);

  // Handle close button
  const closeButton = popup.querySelector("#close-recipe-popup");
  closeButton.addEventListener("click", () => {
    // Remove popup and reset blur for other elements
    popup.remove();
    Array.from(contentToBlur).forEach((child) => {
      child.style.filter = ""; 
      child.style.pointerEvents = ""; 
    });
  });
}
