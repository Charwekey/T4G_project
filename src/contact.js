let contact = document.querySelector ("#contact")
const originalContent= contact.innerHTML;
const originalcontent= nav.innerHTML;
// const footerContent = containerfooter.innerHTML;

function changeColor()
{
  contact.style.backgroundColor = " rgba(12, 0, 0)";
  contact.style.borderColor = "cyan";
  contact.style.boxShadow = "0 2px 13px cyan";

  let head = document.querySelector("h1");
  head.style.color = "cyan";

  let input = document.querySelector(".input");
  input.style.borderBottomColor = "cyan";
  input.style.color = "white";

  let inpp = document.querySelector(".inpp");
  inpp.style.borderBottomColor = "cyan";

  let inp = document.querySelector(".inp");
  inp.style.borderBottomColor = "cyan";

  let inpu = document.querySelector(".inpu");
  inpu.style.borderBottomColor = "cyan";

  let h4 = document.querySelector("h4");
  h4.style.color = "cyan";

  let textarea = document.querySelector("textarea");
  textarea.style.borderBottomColor = "cyan";

  let button = document.querySelector(".subbtn");
  button.style.color = "blue";
  button.style.borderColor = "cyan";
  button.style.backgroundColor = "cyan";

  //  changeColorfornav
  let nav = document.querySelector("#nav");
  nav.style.backgroundColor = "black";

  let naviga = document.querySelector(".naviga");
  naviga.style.color = "cyan";

  let navig= document.querySelector("#navig");
  navig.style.color = "cyan";

  let navi = document.querySelector("#navi");
  navi.style.color = "cyan";

  let navv = document.querySelector("#navv");
  navv.style.color = "cyan";

  let navvv= document.querySelector("#navvv");
  navvv.style.color = "cyan";

  let navs = document.querySelector("#navs");
  navs.style.color = "cyan";

  let active = document.querySelector(".active")
  active.style.color="white"
  active.style.backgroundColor="black";
   
}


contact.addEventListener('mouseenter', changeColor)


contact.addEventListener('mouseleave', ()=> {
    contact.innerHTML = originalContent;
    contact.style.backgroundColor = '';
    contact.style.boxShadow='';
    contact.style.borderColor=''

    nav.innerHTML= originalcontent;
    nav.style.backgroundColor='';
    nav.style.color='';

})