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