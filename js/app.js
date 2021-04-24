(function(){
	var navButton = document.querySelector("#menu");
	var navUl = document.querySelector(".nav__ul");
	function toggleMobileMenu() {
		navUl.classList.toggle("nav__hide-ul");
	}
	navButton.onclick = toggleMobileMenu;
})();