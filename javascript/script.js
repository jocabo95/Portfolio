/*make navbar transparent @ top and solid when scrolled*/

const navBarEl = document.getElementById("navBar");

window.addEventListener("scroll", () =>{

    if(window.scrollY > 10){
        navBarEl.classList.add("navScroll");
    }
    else{
        navBarEl.classList.remove("navScroll");
    }

})

/*make navbar solid color if dropdown activated at positio 0*/
function dropDownBackground () {
    navBarEl.classList.add("navScroll");
}




