const navParent = document.querySelector(".navbar");
navParent.classList.remove("fixed-top");

const observeNav = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navParent.classList.add("nav-custom");
      navParent.classList.add("fixed-top");
      return;
    }
    navParent.classList.remove("nav-custom");
    navParent.classList.remove("fixed-top");
  });
});

observeNav.observe(document.querySelector(".nav-wrapper"));

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
