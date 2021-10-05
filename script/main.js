// Menu-toggle button

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });

    $("nav ul li").on("click", function() {
        $("nav ul").toggleClass("showing");
        $(".menu").toggleClass("close");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
        $('nav').addClass('.menu-scroll-style');
    }

    else {
        $('nav').removeClass('black');
        $('nav').removeClass('.menu-scroll-style');
    }
})

// HAMBURGER    

$("#wrapper").click( function() {
	$(".menu").toggleClass("close");
});