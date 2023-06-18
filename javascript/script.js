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

let docHeight = document.documentElement.scrollHeight;
let windowHeight = window.innerHeight;
let scrollPadding = windowHeight * 0.1;

window.addEventListener("scroll", ()=>{
    
    let scrollPosition = window.pageYOffset + windowHeight;

    if(scrollPosition >= docHeight - scrollPadding){
        footerText.classList.add("footer-text-colored");
    }
    else{
        footerText.classList.remove("footer-text-colored");
    }
})