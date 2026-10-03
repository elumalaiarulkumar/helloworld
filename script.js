// script.js controls how the page BEHAVES.

// Put the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Open and close the menu on small screens
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Close the menu after choosing a link
navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

// Hero slideshow on the home page: crossfade between photos every 7 seconds
const slides = document.querySelectorAll(".hero-slide");
const slideButton = document.querySelector(".slideshow-toggle");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (slides.length > 1 && slideButton && !reduceMotion) {
  const SECONDS_PER_PHOTO = 7;
  let current = 0;
  let timer = null;
  let pausedByVisitor = false;

  const showNext = () => {
    slides[current].classList.remove("is-active");
    slides[current].setAttribute("aria-hidden", "true");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
    slides[current].removeAttribute("aria-hidden");
  };
  const start = () => {
    if (!timer) timer = setInterval(showNext, SECONDS_PER_PHOTO * 1000);
  };
  const stop = () => {
    clearInterval(timer);
    timer = null;
  };

  // Pause / play button
  slideButton.hidden = false;
  slideButton.addEventListener("click", () => {
    pausedByVisitor = !pausedByVisitor;
    slideButton.setAttribute("aria-pressed", pausedByVisitor);
    slideButton.querySelector(".slideshow-label").textContent =
      pausedByVisitor ? "Play slideshow" : "Pause slideshow";
    pausedByVisitor ? stop() : start();
  });

  // Don't rotate while the tab is in the background
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (!pausedByVisitor) start();
  });

  start();
}
