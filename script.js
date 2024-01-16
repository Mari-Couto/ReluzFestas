//Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('visible');
    });

    navLinks.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('visible');
        }
    });
});

//carroussel

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage()
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

