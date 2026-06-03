// HEADER SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}

// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealElements);

function revealElements(){

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 120;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

// SMOOTH PAGE FADE

document.body.style.opacity = 0;

window.addEventListener("load", () => {

    document.body.style.transition = "opacity 0.6s ease";

    document.body.style.opacity = 1;

});