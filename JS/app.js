/** @format */

const burgerMenu = document.querySelector(".burger_menu");
const menu = document.querySelector("nav ul");
const menuArea = document.querySelector(".menu_area");
// BURGER MENU

window.addEventListener("load", siteLoaded);

function siteLoaded() {
	burgerMenu.addEventListener("click", openMenu);
	menuArea.addEventListener("click", hideMenu);
}

function openMenu() {
	menu.classList.toggle("openMenu");

	burgerMenu.children[0].classList.toggle("openMenu");
	burgerMenu.children[1].classList.toggle("openMenu");
	burgerMenu.children[2].classList.toggle("openMenu");
}

function hideMenu() {
	menu.classList.remove("openMenu");
}
