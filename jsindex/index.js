const burger = document.getElementById( "burger" );
const nav = document.querySelector( ".navig" );
const goUp =document.querySelector(".arrow")

// activer le menu smartphone
function uNmenu () {
    nav.style.transform = "translateX( -200px )";
}
function menu () {
    nav.style.transform = "translateX( 0px )";
   setTimeout(uNmenu,4000)
}

// remonter en haut de la page

function scroltop () {
    window.scroll( {
        top: 0,
        left: 0,
        behavior: 'smooth'
    } );
}
    
