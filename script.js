// -------------------js nativ script------------------//

let links = document.querySelectorAll("ul a");
let menu = document.querySelector("nav ul")
let li = document.querySelectorAll('li')
let svg = document.querySelector(".svg")
let btnMenu = document.querySelector(".spans")
let body = document.querySelector("body")

// Click open menu
function btn() {

    menu.style.left = "0cm";
    svg.style.left = "6cm";
    btnMenu.style.display = "none"
    svg.style.display = "block"
}

// var close menu
let closeMenu = () => {
    menu.style.left = "-6cm";
    menu.style.overflow = "hidden";
    btnMenu.style.display = "flex";
    svg.style.display = "none";
    li.forEach((item) => {
        item.style.width = "100%";
    });
};
links.forEach((e) => {
    e.addEventListener("click", closeMenu)
});
// hide 
svg.addEventListener("click", closeMenu);
body.addEventListener("click", function (e) {
    if (e.target != btnMenu && e.target != svg) {
        closeMenu();
    }
});
