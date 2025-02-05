const toggleButton = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleButton.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
