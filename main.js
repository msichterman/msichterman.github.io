window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");
    loading.className += " loaded";
    const scroll = document.querySelector(".scroll-off");
    scroll.classList.remove("scroll-off");
});

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("is-active");
});

