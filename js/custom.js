(function($){
    'use strict';

$('.hunt_menu a').on('click', function(){
    $('.hunt_menu a').removeClass('active');
    $(this).addClass('active');
})

$('.hunt_menu_icon i.fa-bars').on('click', function(){
    $('.hunt_menu').animate({left:0});
    $(this).hide();
    $('.hunt_menu_icon i.fa-xmark').show();
})
$('.hunt_menu_icon i.fa-xmark').on('click', function(){
    $('.hunt_menu').animate({left:-250});
    $(this).hide();
    $('.hunt_menu_icon i.fa-bars').show();
})


$(window).scroll(function(){
    var screenSize = $(window).scrollTop();
    if(screenSize > 200 ){
        $('header').addClass('header_active');
    }
    else{
        $('header').removeClass('header_active');
    }
})




})(jQuery);