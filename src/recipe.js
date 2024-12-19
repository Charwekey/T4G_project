let button=document.querySelector("#view");

function viewRecipe(){
    let view = document.querySelector(".view")
        view.style.display="block"
        let bigger= document.querySelector(".bigger ")

        bigger.style.backgroundColor="black"
        let recipes = document.querySelector(".recipes")
        recipes.style.backgroundColor="black"
        
}
button.addEventListener("click", viewRecipe);

