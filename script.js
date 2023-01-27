

// -------------------js nativ script------------------//

let links = document.querySelectorAll("ul a");
let menu = document.querySelector("nav ul")
let svg = document.querySelector(".svg")
let span = document.querySelector(".spans")

links.forEach(function(elem) {
    elem.addEventListener("click", function() {
        menu.style.left = "-6cm";
        span.style.display = "flex"
        svg.style.display = "none"
    });
});

svg.addEventListener("click", () => {
    menu.style.left = "-6cm";
    span.style.display = "flex"
    svg.style.display = "none"
} )
console.log(links)
function btn() {

    menu.style.left = "0cm";
    svg.style.left = "6.2cm";
    span.style.display = "none"
    svg.style.display = "block"

}


// -------------------------- jquery scrit----------//

// $("button").on("click" , function () {
//     $("nav ul").toggleClass("0cm 6.6cm")
//     menu.style.left = "0cm";
//     button.style.marginLeft = "6.5cm";
//     svg.style.display = "block"
//     span.style.display = "none"
// });
