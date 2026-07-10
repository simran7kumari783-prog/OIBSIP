// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// ===========================
// Dark Mode
// ===========================

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    else{
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }

});

// ===========================
// Typing Animation
// ===========================

const words = [
    "Software Developer",
    "Java Developer",
    "Frontend Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function type(){

    const currentWord = words[wordIndex];

    if(isDeleting){
        typing.textContent = currentWord.substring(0,charIndex--);
    }
    else{
        typing.textContent = currentWord.substring(0,charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length + 1){
        isDeleting = true;
        speed = 1200;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type,speed);
}

type();

// ===========================
// Sticky Navbar
// ===========================

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    header.classList.toggle("sticky",window.scrollY>50);

});
// ===========================
// Scroll To Top
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});