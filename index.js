let navBarButtons = document.querySelectorAll(".navBarIcon ul li");
let navBarIcon = document.querySelector(".navBarIcon");
let goTop = document.getElementsByClassName("gototop")[0];
navBarButtons.forEach((link) => {
    link.addEventListener("click", () => navBarIcon.classList.toggle("show"));
})

goTop.addEventListener("click", () => { scrollWindow() })
let scrollWindow = () => {
    window.scrollTo(0, 0);
}
window.onscroll = () => {
    if (window.scrollY <= 900) {
        goTop.style.display = "none"
    }
    else {
        goTop.style.display = "block"
    }
}

