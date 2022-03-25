const burger = document.getElementById( "burger" );
const nav = document.querySelector( ".navig" );


function uNmenu () {
    nav.style.transform = "translateX( -200px )";
}
function menu () {
    nav.style.transform = "translateX( 0px )";
   setTimeout(uNmenu,3000)
}


    
