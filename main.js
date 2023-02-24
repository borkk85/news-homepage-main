// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("header ul");
const nav = document.querySelector("header");

// Select nav links
const navLink = document.querySelectorAll("li");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


const heroImage = document.getElementById('hero-image')
const mobileWidth = 768;

function setHeroImage() {
    if(window.innerWidth < mobileWidth) {
        heroImage.src = './assets/images/image-web-3-mobile.jpg'
    } else {
        heroImage.src = './assets/images/image-web-3-desktop.jpg'
    }
}

setHeroImage()

window.addEventListener('resize', setHeroImage)