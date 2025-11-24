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

// Back to top functionality
function scrollToTop(e) {
  if (e) e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  // Fallback for older browsers
  if (!window.scrollTo || !window.scrollTo.toString().includes("behavior")) {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}

// Handle all back to top links
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", scrollToTop);
});

