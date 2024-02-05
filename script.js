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

const minhocasContainer = document.querySelector('.minhocas');

for (let i = 0; i < 10; i++) {
    const minhoca = document.createElement('div');
    minhoca.classList.add('minhoca');
    minhocasContainer.appendChild(minhoca);
}
