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
