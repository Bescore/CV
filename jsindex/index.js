const burger = document.getElementById( "burger" );
const nav = document.querySelector( ".navig" );
const goUp =document.querySelector(".arrow")

// activer le menu smartphone
function uNmenu () {
    nav.style.transform = "translateX( -200px )";
}
function menu () {
    nav.style.transform = "translateX( 0px )";
}

// remonter en haut de la page

function scroltop () {
    window.scroll( {
        top: 0,
        left: 0,
        behavior: 'smooth'
    } );
}
// faire apparaître la flèche haut de page au scroll pendant 4 secondes puis disparaît

function Imhere () {
    goUp.style.display = "initial";
    function Imnothere () {
        goUp.style.display = "none"; 
    }
    setTimeout(Imnothere,4000)
}
window.addEventListener("scroll",Imhere)
