
const orderButtons = document.querySelectorAll(".orderbutton");


orderButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    createPopup(index, button);
  });
});

function createPopup(index, button) {
  const existingPopup = document.querySelector(".popup-form");
  if (existingPopup) {
    existingPopup.remove();
  }

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
  overlay.style.backdropFilter = "blur(1px)"; 
  overlay.style.zIndex = "999"; 

  
  document.body.appendChild(overlay);

  const popup = document.createElement("div");
  popup.classList.add("popup-form");
  popup.innerHTML = `
    <button id="close-popup" style="float: right; background: red; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer;">X</button>
    <h3>Order Details</h3>
    <p>Fixed Price: <span id="fixed-price">${
      button.previousElementSibling.textContent
    }</span></p>
    <label for="quantity">Quantity:</label>
    <select id="quantity">
      ${Array.from(
        { length: 10 },
        (_, i) => `<option value="${i + 1}">${i + 1}</option>`
      ).join("")}
    </select>
    <p>Total Price: <span id="total-price"></span></p>
    <button id="confirm-order" style="background-color: green; color: white; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer;">Buy</button>
  `;

  popup.style.position = "absolute";
  popup.style.backgroundColor = "white";
  popup.style.padding = "20px";
  popup.style.border = "1px solid #ccc";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  popup.style.zIndex = "1000"; 


  const buttonRect = button.getBoundingClientRect();
  popup.style.top = `${buttonRect.bottom + window.scrollY + 10}px`;
  popup.style.left = `${buttonRect.left + window.scrollX}px`;

 
  document.body.appendChild(popup);

  const fixedPrice = parseInt(
    button.previousElementSibling.textContent.replace("$", "")
  );
  const quantitySelect = popup.querySelector("#quantity");
  const totalPriceSpan = popup.querySelector("#total-price");

  
  totalPriceSpan.textContent = `$${fixedPrice}`;

  // Update total price when quantity changes
  quantitySelect.addEventListener("change", () => {
    const quantity = parseInt(quantitySelect.value);
    const totalPrice = fixedPrice * quantity;
    totalPriceSpan.textContent = `$${totalPrice}`;
  });

  // confirm button navigates to another page
  const confirmButton = popup.querySelector("#confirm-order");
  confirmButton.addEventListener("click", () => {
    const redirectURL = "../pages/order.html"; 
    window.location.href = redirectURL;
  });

  // Handle close button
  const closeButton = popup.querySelector("#close-popup");
  closeButton.addEventListener("click", () => {
    // Remove popup and overlay
    popup.remove();
    overlay.remove();
  });
}
