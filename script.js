

// -------------------js nativ script------------------//

let links = document.querySelectorAll("ul a");
let menu = document.querySelector("nav ul")
let svg = document.querySelector(".svg")
let span = document.querySelector(".spans")
let body = document.querySelector("body")

// open menu nav
function btn() {

    menu.style.left = "0cm";
    svg.style.left = "6cm";
    span.style.display = "none"
    svg.style.display = "block"

}

// Click close menu

let closeMenu = () => {
            menu.style.left = "-6cm";
            span.style.display = "flex"
            svg.style.display = "none"
        };

links.forEach((e) => {
    e.addEventListener("click", closeMenu)
});
svg.addEventListener("click", closeMenu);
