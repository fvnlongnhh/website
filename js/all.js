// MAKE ADV ABSOLUTE
$(window).load(function(){
	"use strict";
	var adv_local = $('main').offset().top;

	$(window).scroll(function() {
	    if ($(this).scrollTop() > adv_local) {
	    	console.log( asdasdas);
	        $('.adv_poster_r').addClass('active');
	    } else {
	        $('.adv_poster_r').removeClass('active');
	    }
	});
});

// BACK TO TOP
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#btn_top').fadeIn(300);
    } else {
        $('#btn_top').fadeOut(300);
    }
});

$('#btn_top').click(function () {
    $('body,html').animate({scrollTop: 0}, 800);
});

