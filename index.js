let navBarButtons = document.querySelectorAll(".navBarIcon ul li");
let navBarIcon = document.querySelector(".navBarIcon");
let arrow = document.getElementsByClassName("gototop");
console.log(arrow)
navBarButtons.forEach((link) =>{
 link.addEventListener("click", ()=> navBarIcon.classList.toggle("show"));
})
let scrollUp = () => window.scrollTo(0,0)
arrow.addEventListener("click", ()=> scrollUp);