/*make navbar transparent @ top and solid when scrolled*/

const navBarEl = document.getElementById("navBar");
const dropDownEl = document.querySelector("nav-item");

window.addEventListener("scroll", () =>{

    if(window.scrollY > 90){
        navBarEl.classList.add("navScroll");
        dropDownEl.classList.add("navScroll");
    }
    else{
        navBarEl.classList.remove("navScroll");
        dropDownEl.classList.remove("navScroll");
    }

})


