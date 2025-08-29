// === Section Reveal Animation ===
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,                  // trigger as soon as section enters viewport
  rootMargin: "0px 0px -10% 0px" // fire earlier near bottom
});

sections.forEach(section => observer.observe(section));

// === Mobile Menu Toggle ===
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav .links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// === Fallback: ensure last section always shows ===
window.addEventListener("load", () => {
  const lastSection = sections[sections.length - 1];
  if (lastSection) {
    setTimeout(() => lastSection.classList.add("show"), 200);
  }
});
