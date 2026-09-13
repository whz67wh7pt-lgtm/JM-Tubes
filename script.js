/* =========================================================
   MASTER STARTER WEBSITE
   VERSION 0.2
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle =
  document.querySelector(".menu-toggle");

const mainNav =
  document.querySelector(".main-nav");


if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";


    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );


    menuToggle.classList.toggle("active");

    mainNav.classList.toggle("open");

    document.body.classList.toggle("menu-open");

  });



  mainNav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );


      menuToggle.classList.remove("active");

      mainNav.classList.remove("open");

      document.body.classList.remove("menu-open");

    });

  });



  window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );


      menuToggle.classList.remove("active");

      mainNav.classList.remove("open");

      document.body.classList.remove("menu-open");

    }

  });

}



/* =========================================================
   AUTOMATIC COPYRIGHT YEAR
   ========================================================= */

const currentYear =
  document.getElementById("current-year");


if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}



/* =========================================================
   MASTER CONTACT FORM DEMO

   REMOVE THIS DEMO BEHAVIOUR ONCE FORMSPREE IS CONNECTED
   ========================================================= */

const contactForm =
  document.getElementById("contact-form");

const formMessage =
  document.getElementById("form-message");


if (contactForm && formMessage) {

  contactForm.addEventListener("submit", (event) => {

    const action =
      contactForm.getAttribute("action");


    if (action === "#") {

      event.preventDefault();


      formMessage.textContent =
        "Master template only — connect the client's Formspree account before launch.";


      formMessage.classList.add("visible");

    }

  });

}
