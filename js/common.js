$(document).ready(function() {
	// $('.list__item').click(function(){
	// 	var item = $(this);
	// 	item.toggleClass('list-active');
	// 	if (item.hasClass('list__item-active')) {
	// 		item.toggleClass('list-active-act');
	// 	};
	// 	if (item.hasClass('list__item-passive')) {
	// 		item.toggleClass('list-active-pas');
	// 	};
	// 	if (item.hasClass('list__item-develop')) {
	// 		item.toggleClass('list-active-dev');
	// 	};				
	// 	return false							
	// });
	// open create-account
	$('.js-account').on('click', function() {
	 $(".create-account").addClass("is-open");
	 return false
	});
	// close create-account
	$('.js-create-account-close').on('click', function() {
	 $(".create-account").removeClass("is-open");
	 return false
	});
	// modal popup
	function modals() {
		$(document).on("click", function(){
			$(".js-overlay").hide();
			$("body").removeClass("has-open-popup");
		});
		$(".js-popup-link").on("click", function(event){
			$(".js-overlay").fadeOut(200);
			var popup = $(this).attr("href");
			$("body").addClass("has-open-popup");
			$("."+popup).parent().fadeIn(200);
			event.stopPropagation();
			return false;
		});
		$(".js-popup-close").on("click", function(){
			$(".js-overlay").fadeOut(200);
			$("body").removeClass("has-open-popup")
			return false;
		});
		$(".js-popup").on("click", function(event){
			event.stopPropagation();
		});
	} modals();

});


