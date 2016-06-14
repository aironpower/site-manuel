$(function() {
	$('.site-menu a').scrollOffset();

	$('.site-menu-burger').on('click', function() {
		$(this).find('i').toggleClass('fa-close').toggleClass('fa-bars');
		$('.site-menu-list').slideToggle();
	})
});