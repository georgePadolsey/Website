var buttons = $('.circle').click(function() {
	$('#middleNav').animate({
		left: $('body').width(),
		width: '200px',
		marginLeft: '-200px',
		top: '100px'
	}, 1000);
});