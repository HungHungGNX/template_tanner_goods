const btn_menu = document.querySelector(".btn-menu");
const btn_close = document.querySelector(".btn-close");
const menu = document.querySelector(".content .navbar ul");

btn_menu.addEventListener("click", (e) => {
    menu.classList.toggle("active");
});

btn_close.addEventListener("click", (e) => {
    menu.classList.toggle("active");
});
