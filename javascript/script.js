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

/*Change footer text color when bottom is reached*/

let footerText = document.getElementById("footer-text");
let hollaButton = document.querySelector(".holla-button");

let docHeight = document.documentElement.scrollHeight;
let windowHeight = window.innerHeight;

window.addEventListener("scroll", ()=>{
    
    let scrollPosition = window.scrollY + windowHeight;

    if(scrollPosition >= docHeight){
        footerText.classList.add("footer-text-colored");
        hollaButton.classList.add("holla-button-colored");
    }
    else{
        footerText.classList.remove("footer-text-colored");
        hollaButton.classList.remove("holla-button-colored");
    }
})