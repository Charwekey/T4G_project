


document.querySelectorAll(".menu").forEach((menu) => {
  const originalContent = menu.innerHTML; // Save the original content

  menu.addEventListener("mouseenter", () => {
    const link = menu.getAttribute("data-link"); // Get the unique link from the data attribute
    menu.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Change background color

    menu.innerHTML = `
         <em><p class="explore">
                <a href="${link}"  >Explore</a>
            </p>
            </em>
        `;
  
  });

  menu.addEventListener("mouseleave", () => {
    menu.style.backgroundColor = ""; 
    menu.innerHTML = originalContent; 
  });
});

