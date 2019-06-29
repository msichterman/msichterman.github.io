window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");
    loading.className += " loaded";
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
    });
});

