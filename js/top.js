$(document).ready(function () {
	"use strict";
    var pos_gnavi = $('#gnavi').offset().top;

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos_gnavi) {
            $('#gnavi').addClass('fix');
        }
        else{
            $('#gnavi').removeClass('fix');
        }
    });

    $('.slide_list').slick({
    	dots: false,
    	arrows: false,
		slidesToShow: 1,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        fade: true,
  		cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
        
    });
    

    $(window).load(function(){
        AOS.init({ 
            easing: 'ease',
            once: true,
            duration: 1000,
            disable: 'mobile',
        }); 
    });
});




$(document).ready(function () {
    "use strict";
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


    $('.banner_list dl , .news_list_ct1 dl').on('click', function () {
        var href = $(this).find('a').attr('href');
        location.href = href;
    });

    $(".btn_side").click(function () {
        $(this).toggleClass('open');
        $("#gnavi_sp, #gnavi_sp_bg, #wrapper_ct").toggleClass("active");
        $(".sub_btn").removeClass("disable");
        $('ul.sub_menu').stop().slideUp();
        return false;
    });

    $(".sub_btn").click(function () {
        $(this).toggleClass("disable");
        $(this).next("ul.sub_menu").stop().slideToggle("500");
    });
    
    $(".btn_close_menu").click(function () {
        $("#gnavi_sp").removeClass("active");
        $(".btn_side").removeClass("open");
        $("ul.sub_menu").stop().slideUp("500");
        $('.sub_btn').removeClass("disable");
    });

});


// anchor in page
$(window).bind('load',function(){
    "use strict";
    $(function(){
        $('a[href^="#"]').click(function(){
            if ($($(this).attr('href') ).length ) {
                var p = $( $(this).attr('href') ).offset();
                if($(window).width() > 640){
                    $('html,body').animate({ scrollTop: p.top - 170}, 400);
                }
                else {
                    $('html,body').animate({ scrollTop: p.top - 100}, 400);
                }
            }
            return false;
        });
    });
});

// anchor top page #
$(window).bind('load',function(){
    "use strict";
 var hash = location.hash;
 if(hash){
      var p1 = $(hash).offset();
    if($(window).width() > 640){
                    $('html,body').animate({ scrollTop: p1.top - 100}, 400);
                }
                else {
                    $('html,body').animate({ scrollTop: p1.top - 100}, 400);
                }
    }

});











