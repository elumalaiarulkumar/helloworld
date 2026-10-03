// script.js controls how the page BEHAVES.

// Put the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Respond to button clicks
const button = document.getElementById("greet-button");
const output = document.getElementById("greet-output");
let clicks = 0;

button.addEventListener("click", () => {
  clicks += 1;
  output.textContent = `Hello! You've clicked ${clicks} time${clicks === 1 ? "" : "s"}.`;
});
