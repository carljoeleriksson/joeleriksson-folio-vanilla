var menu,arrow;

var openMenu = function() {
  arrow.classList.toggle('arrow--active');
  menu.classList.toggle('nav__list--active');
};

var init = function() {
	menu = document.querySelector('.nav__list');
	arrow = document.querySelector('.arrow');
	console.log(arrow);
  arrow.addEventListener('click', openMenu, false);
};

$(document).ready(init);

$(window).scroll(function(){
	if($(document).scrollTop() > 0) {
		$('#header').addClass('small');
		} else {
		$('#header').removeClass('small');
		}
	});