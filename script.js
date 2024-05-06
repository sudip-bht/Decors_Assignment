document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const sideMenu = document.querySelector("#side-menu");
  const bottomNavbar = document.querySelector(".bottom-navbar");

  hamburger.addEventListener("click", function () {
    sideMenu.classList.toggle("active");
  });
  hamburger.addEventListener("click", function () {
    bottomNavbar.classList.toggle("active");
  });
});
