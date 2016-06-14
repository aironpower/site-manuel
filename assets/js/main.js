$(function() {
	$('.site-menu a').scrollOffset();
	$('.cd-top').scrollOffset();



	$( '.item-img' ).hover(function() {

		$('.').stop(false, false).slideToggle();
	});

	$('#miboton').click(function() {
	    // Recargo la página
	    location.reload();
	});
});