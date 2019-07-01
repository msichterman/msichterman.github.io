window.addEventListener("load", () => {
    const loaderContainer = document.querySelector(".loader-container");
    const spinner = document.querySelector(".spinner");
    loaderContainer.className += " loaded";
    spinner.className += " loaded";
    const scroll = document.querySelector(".scroll-off");
    scroll.classList.remove("scroll-off");
});

const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".expandable-menu");
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("is-active");
   menu.classList.toggle("show");
});

const menuItems = document.getElementsByClassName("menu-item");
Array.from(menuItems).forEach( (item) => {
    item.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.classList.toggle("is-active");
    });
});

