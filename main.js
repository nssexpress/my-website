// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    mainNav.classList.toggle("open");
  });

  // Close nav on link click (mobile)
  mainNav.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      mainNav.classList.remove("open");
    });
  });
}

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

