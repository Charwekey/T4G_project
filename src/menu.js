// // let menu = document.querySelector(".menu")
// // function changeMenu(){
// //     let menu = document.querySelector(".menu")
// //     menu.style.backgroundColor="orange"
// //     menu.innerHTML="<p class='explore'> Explore</p>"
// //     let img = menu.querySelector(".img")
// //     // img.style.opacity= "0.5"

// //     function returnMenu(){
// //         menu.style.backgroundColor=""
// //         img.style.opacity="1"

// //     }
// //     menu.addEventListener("mouseleave", returnMenu)
// // }

// // menu.addEventListener("mouseenter", changeMenu)

// let allMenu = document.querySelectorAll('.menu');

// allMenu.forEach(menu => {
//     const originalContent = menu.innerHTML; // Save the original content

//     menu.addEventListener('mouseenter', () => {
//         menu.style.backgroundColor = 'orange'; // Change background color
//         menu.innerHTML = `
//             <p>
//                 <a href="explore.html" style="text-decoration: none; color: white;">Explore</a>
//             </p>
//         `;
//         menu.style.textAlign = 'center'; // Center the new content
//         menu.style.color = 'white'; // Set text color for visibility
//     });

//     menu.addEventListener('mouseleave', () => {
//         menu.style.backgroundColor = ''; // Revert background color
//         menu.innerHTML = originalContent; // Restore original content
//     });
// });

// let me = document.querySelectorAll(".menu");
// console.log(me);

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
    // menu.style.textAlign = 'center'; // Center the new content
    // menu.style.margin="200px"
    // menu.style.color = 'white'; // Set text color for visibility
  });

  menu.addEventListener("mouseleave", () => {
    menu.style.backgroundColor = ""; // Revert background color
    menu.innerHTML = originalContent; // Restore original content
  });
});
export const footerContent = containerfooter.innerHTML;
