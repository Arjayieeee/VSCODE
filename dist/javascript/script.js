const menu = document.querySelector(".toggle__menu");
const navigation = document.querySelector(".header__nav");

menu.addEventListener("click", () => {
    navigation.classList.toggle("open");
})