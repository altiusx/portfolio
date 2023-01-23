/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".folio__container", {
  selectors: {
    target: ".folio__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active folio item */
const linkedFolioItem = document.querySelectorAll(".folio__item");

function activeFolioItem() {
  linkedFolioItem.forEach((l) => l.classList.remove("active-folio-item"));
  this.classList.add("active-folio-item");
}

linkedFolioItem.forEach((l) => l.addEventListener("click", activeFolioItem));

/*=============== SWIPER OTHERS ===============*/
let swiperOthers = new Swiper(".others__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      //   spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 50,
    // },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //   reset: true,
});

sr.reveal(".home__data");
sr.reveal(
  ".section__subtitle, .section__title, .about__container, .skills__container, .folio__container, .others__container, .contact__container",
  {
    origin: "bottom",
    delay: 0,
  }
);
sr.reveal(".home__handle", { delay: 700 });
sr.reveal(".home__social, .home__scroll", {
  delay: 900,
  origin: "bottom",
});

/*=============== home education typewriter ===============*/
var type = document.getElementById("typewriter");

var typewriter = new Typewriter(type, {
  loop: true,
});

typewriter
  .typeString("Software Engineer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Frontend Developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Tech Enthusiast")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Volunteer")
  .pauseFor(1000)
  .start();
