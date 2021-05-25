window.addEventListener('scroll', function() {
	var navbar = document.querySelector('nav');
	var a_li = document.querySelector('.navbar-brand');
	var a_la = document.querySelector('.nav-link');
	var windowPosition = window.scrollY > 0;

	navbar.classList.toggle('aktif',windowPosition);
	a_li.classList.toggle('hitam',windowPosition);
	a_la.classList.toggle('black',windowPosition);
})