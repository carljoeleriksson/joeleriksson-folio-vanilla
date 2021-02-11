var menu,arrow,nav;
var percent;
var totalHeight;
var lastScrollTop;


var openMenu = function() {
  arrow.classList.toggle('arrow--active');
  menu.classList.toggle('nav__list--active');
  nav.classList.toggle('nav--active');
};
	// Show an element
var show = function (elem) {

	// Get the natural height of the element
	var getHeight = function () {
		elem.style.display = 'block'; // Make it visible
		var height = elem.scrollHeight + 'px'; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
	};

	var height = getHeight(); // Get the natural height
	elem.classList.add('is-visible'); // Make the element visible
	elem.style.height = height; // Update the max-height

	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 350);

};

// Hide an element
var hide = function (elem) {

	// Give the element a height to change from
	elem.style.height = elem.scrollHeight + 'px';

	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

	// When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 350);

};

// Toggle element visibility
var toggle = function (elem, timing) {

	// If the element is visible, hide it
	if (elem.classList.contains('is-visible')) {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);
	
};

// Listen for click events
document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('toggle')) return;

	// Prevent default link behavior
	event.preventDefault();

	// Get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;

	// Toggle the content
	toggle(content);

}, false);

// Shrinking Header on scroll function
var changeOpacity = function(){
	var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       var down= (st-lastScrollTop)/totalHeight;
       percent-=down;
   } else {
      // upscroll code
      var up= (lastScrollTop-st)/totalHeight;
      percent+=up;
   }
        $('.subheader').css("opacity",percent);
        lastScrollTop = st;
}

var onScroll = function(e) {
	changeOpacity();

	if (nav.classList.contains('nav--active')){
		openMenu();
	}
}





var init = function() {
	nav = document.querySelector('.nav');
	menu = document.querySelector('.nav__list');
	arrow = document.querySelector('.arrow');
	$(window).scroll(onScroll);
	if ($(window).width() > 740){
		openMenu();
	}
	percent=1;
	totalHeight=$('#header').height();
	lastScrollTop = 0;
  	arrow.addEventListener('click', openMenu, false);
	
};



$(document).ready(init);
