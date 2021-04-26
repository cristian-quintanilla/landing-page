(function(){
	let navButton = document.querySelector("#menu");
	let navUl = document.querySelector(".nav__ul");
	let footer = document.querySelector(".footer__info");
	const year = new Date().getFullYear();

	function toggleMobileMenu() {
		navUl.classList.toggle("nav__hide-ul");
	}
	navButton.onclick = toggleMobileMenu;

	footer.innerHTML = `&copy; Copyright &mdash; ${year} | by Cristian Quintanilla.`;
})();