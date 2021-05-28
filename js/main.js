const menuButton = document.querySelector(".menu-button");

const menu = document.querySelector(".navbar");

const closeMenuButton = document.querySelector(".close");

const toggleMenu = (event) => {
  menu.classList.toggle("isopen");
};

menuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);
