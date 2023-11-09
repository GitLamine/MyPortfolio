// -------------------js nativ script------------------//
let links = document.querySelectorAll("ul a");
let menu = document.querySelector("nav ul")
let li = document.querySelectorAll('li')
let svg = document.querySelector(".svg")
let span = document.querySelector(".spans")



// Click open menu
function btn() {
    menu.style.display = "flex";
    menu.style.left = "0cm";
    svg.style.left = "6cm";
    span.style.display = "none"
    svg.style.display = "block"
}

// var close menu
let closeMenu = () => {
    menu.style.left = "-6cm";
    span.style.display = "flex"
    svg.style.display = "none"
    li.style.width = "100%"
};
links.forEach((e) => {
    e.addEventListener("click", closeMenu)
});
// hide 
svg.addEventListener("click", closeMenu);


AOS.init();