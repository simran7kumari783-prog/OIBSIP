// ===========================
// LOADER
// ===========================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});


// ===========================
// DARK MODE
// ===========================

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

}


// ===========================
// CONTACT FORM
// ===========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank You! Your message has been sent successfully.");

        contactForm.reset();

    });

}


// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===========================
// SCROLL PROGRESS BAR
// ===========================

window.addEventListener("scroll", function () {

    const progressBar = document.getElementById("progress-bar");

    if (progressBar) {

        const scrollTop = document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const progress = (scrollTop / height) * 100;

        progressBar.style.width = progress + "%";

    }

});


// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ===========================
// HERO IMAGE ANIMATION
// ===========================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.addEventListener("mouseover", function () {

        heroImage.style.transform = "scale(1.05)";

        heroImage.style.transition = "0.4s";

    });

    heroImage.addEventListener("mouseout", function () {

        heroImage.style.transform = "scale(1)";

    });

}


// ===========================
// COURSE BUTTONS
// ===========================

const enrollButtons = document.querySelectorAll(".course-card button");

enrollButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("🎉 Enrollment feature will be available soon!");

    });

});


// ===========================
// NEWSLETTER BUTTON
// ===========================

const newsletterBtn = document.querySelector(".newsletter button");

if (newsletterBtn) {

    newsletterBtn.addEventListener("click", function () {

        const email = document.querySelector(".newsletter input");

        if (email.value.trim() === "") {

            alert("Please enter your email.");

        } else {

            alert("✅ Thank you for subscribing!");

            email.value = "";

        }

    });

}