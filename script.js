// Select all sections
const sections = document.querySelectorAll("section");

// Create Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add 'show' class when section enters viewport
      entry.target.classList.add("show");
      // Optional: stop observing after animation
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // trigger when 20% of section is visible
});

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

// ===== Optional: Mobile Menu Toggle =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav .links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});