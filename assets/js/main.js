// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAUVJev2mSaRFPucSPN2dkBQwGm8eiBvhI",
  authDomain: "sarvh-b5f36.firebaseapp.com",
  projectId: "sarvh-b5f36",
  storageBucket: "sarvh-b5f36.appspot.com",
  messagingSenderId: "935760997100",
  appId: "1:935760997100:web:a62bfdcd294eed376653c9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections

let contactInfo = firebase.database().ref("infos");

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// /*SCROLL HOME*/
// sr.reveal('.home__title', {})
// sr.reveal('.home__scroll', {delay: 200})
// sr.reveal('.home__img', {origin:'right', delay: 400})

// /*SCROLL ABOUT*/
// sr.reveal('.about__img', {delay: 500})
// sr.reveal('.about__subtitle', {delay: 300})
// sr.reveal('.about__profession', {delay: 400})
// sr.reveal('.about__text', {delay: 500})
// sr.reveal('.about__social-icon', {delay: 600, interval: 200})

// /*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle', {})
// sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
// sr.reveal('.skills__img', {delay: 400})

// /*SCROLL PORTFOLIO*/
// sr.reveal('.portfolio__img', {interval: 200})

// sr.reveal('.main-carousel', {interval: 200})

// /*SCROLL CONTACT*/
// sr.reveal('.contact__subtitle', {})
// sr.reveal('.contact__text', {interval: 200})
// sr.reveal('.contact__input', {delay: 400})
// sr.reveal('.contact__email', {delay: 400})
// sr.reveal('.contact__name', {delay: 400})
// sr.reveal('.contact__button', {delay: 400})

// listen to submit
document.querySelector(".contact__form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // get input value

  let email = document.querySelector(".contact__email").value;
  let message = document.querySelector(".contact__input").value;
  let name = document.querySelector(".contact__name").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact__form").reset();
}

// Save infos to firebase

function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
