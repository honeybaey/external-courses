const burger = document.querySelector(".menu-burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

nav.addEventListener("click", () => {
  nav.classList.remove("active");
});
