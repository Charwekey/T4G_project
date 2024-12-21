let contact = document.querySelector 


("#contact")
const originalContent= contact.innerHTML;
const originalcontent= nav.innerHTML;
// const footerContent = containerfooter.innerHTML;

function changeColor()
{
  contact.style.backgroundColor = "  #ffcc99";
  contact.style.borderColor = " #ff9933";
  contact.style.boxShadow = "0 2px 13px  #ff9933";

  let head = document.querySelector("h1");
  head.style.color = "black";

  let input = document.querySelector(".input");
  input.style.borderBottomColor = " #ff9933";
  

  let inpp = document.querySelector(".inpp");
  inpp.style.borderBottomColor = " #ff9933";

  let inp = document.querySelector(".inp");
  inp.style.borderBottomColor = " #ff9933";

  let inpu = document.querySelector(".inpu");
  inpu.style.borderBottomColor = " #ff9933";

  let h4 = document.querySelector("h4");
  h4.style.color = "black";

  let textarea = document.querySelector("textarea");
  textarea.style.borderBottomColor = " #ff9933";

  let button = document.querySelector(".subbtn");
  button.style.color = "black";
  button.style.borderColor = " #ff9933";
  button.style.backgroundColor = " #ff9933";

}


contact.addEventListener('mouseenter', changeColor)


contact.addEventListener('mouseleave', ()=> {
    contact.innerHTML = originalContent;
    contact.style.backgroundColor = '';
    contact.style.boxShadow='';
    contact.style.borderColor=''

   

})
