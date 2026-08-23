/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================
   MOBILE NAVBAR
========================= */

const navbarMenu = document.getElementById("navbarMenu");
const navbarToggler = document.querySelector(".navbar-toggler");

if (navbarToggler && navbarMenu) {

    navbarToggler.addEventListener("click", () => {

        navbarMenu.classList.toggle("show");

    });

}


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING LINK
========================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbarMenu) {
            navbarMenu.classList.remove("show");
        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".skill-box, .project-card, .stat-box, .contact-card"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   BUTTON / LINK EFFECT
========================= */

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        link.style.transform = "scale(0.98)";

        setTimeout(() => {

            link.style.transform = "";

        }, 120);

    });

});


/* =========================
   PAGE LOADED
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});