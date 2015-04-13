$(document).ready(function() {

	$('.timeline-item .icon').hover(function() {
		$(this).siblings('.more-info').toggleClass('more-info-show animated pulse');
		$(this).siblings('.more-info').toggleClass('activated');
	});

	$('.more-info').hover(function() {
		$(this).toggleClass('more-info-show');
		$(this).toggleClass('activated');
	});

	$('.cancel').on('click', function() {
		$('.more-info').removeClass('more-info-show animated pulse activated');
	});

});