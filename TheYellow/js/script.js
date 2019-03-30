$(function() {

	let plus = $('#plus');
	let modal = $('#modal');
	let navLink = $('li a');
 	
 	plus.click(function() {
	modal.toggle('slow')
	});

 	navLink.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	});
}); 