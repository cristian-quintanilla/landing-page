(function(){
	let navButton = document.querySelector("#menu");
	let navUl = document.querySelector(".nav__ul");
	let footer = document.querySelector(".footer__info");
	const year = new Date().getFullYear();


	let existe = false;
	/* HIDE AND SHOW MENU */
	function toggleMobileMenu() {
		navUl.classList.toggle("nav__hide-ul");
		existe = !existe;
		existeFn(existe);
	}
	navButton.onclick = toggleMobileMenu;

	function existeFn(existe){
		if ( !existe ){
			while (navButton.firstChild){
				navButton.removeChild(navButton.firstChild);
			}
	
			navButton.innerHTML += `<img class="nav__icon-menu" src="./img/menu.png" />`;
		}else{
			while (navButton.firstChild){
				navButton.removeChild(navButton.firstChild);
			}
	
			navButton.innerHTML += `<img class="nav__icon-menu" src="./img/close.png" />`;
		}
	}

	footer.innerHTML = `&copy; Copyright &mdash; ${year} | by Cristian Quintanilla.`;
})();