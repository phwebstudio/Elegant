$(document).ready(function () {
	$("#logo, #main-menu, #portfolio-anchor, #contacts-anchor").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});

$(document).ready(function() {
		$('.menu-trigger').click(function() {
		$('header nav ul').slideToggle(500);
	});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 10) {
		$('header').addClass("sticky");
	} else {
		$('header').removeClass("sticky");
	}
});

lightbox.option({
	'wrapAround': true
})