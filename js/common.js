$(document).ready(function() {



	$('.list__item').click(function(){
		var item = $(this);
		item.toggleClass('list-active');
		if (item.hasClass('list__item-active')) {
			item.toggleClass('list-active-act');
		};
		if (item.hasClass('list__item-passive')) {
			item.toggleClass('list-active-pas');
		};
		if (item.hasClass('list__item-develop')) {
			item.toggleClass('list-active-dev');
		};				
		return false							
	});	

		




});


