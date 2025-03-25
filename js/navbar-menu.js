const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".navbar-menu");
const closeBtn = document.querySelector(".close-btn");

menuIcon.addEventListener("click", () => {
sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
sidebar.classList.remove("active");
});