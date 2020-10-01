$(document).ready(function() {

    // smooth scrolling
    $(".nav_link").on("click", function(e) {
        e.preventDefault();

        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 900);

        $('header').removeClass('menu_active');
        $('body').removeClass('disable_scroll');
    });

    // menu_button
    $(".menu_button").click(function(e) {
        e.preventDefault();
        $('header').toggleClass('menu_active');
        $('body').toggleClass('disable_scroll');
    });

});