$(document).ready(function() {
	$('#search-query').focus();
});

$('#search-btn').click(function() {
	console.log('fd')
	$('#results').addClass('results--active');
});

$('#advanced-search-button').click(function() {
	$('.advanced-search-panel').slideToggle('fast');
	$(this).toggleClass('active');
});

$(document).ready(function ($) {
    $('#tabs').tab();
});