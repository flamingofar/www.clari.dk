/** @format */

const burgerMenu = document.querySelector(".burger_menu");
const menu = document.querySelector("nav ul");
// BURGER MENU
burgerMenu.addEventListener("click", openMenu);

function openMenu() {
	menu.classList.toggle("openMenu");

	burgerMenu.children[0].classList.toggle("openMenu");
	burgerMenu.children[1].classList.toggle("openMenu");
	burgerMenu.children[2].classList.toggle("openMenu");
}
