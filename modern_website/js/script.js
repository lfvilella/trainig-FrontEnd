jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 11,
        perturbance: 0.01,
    });

    var typed = new Typed('#text-txt', {
        strings:["I'm just <span class='primary'>learning...</span>", "and it's <span class='second'>awesome!!!</span>"],
        typeSpeed: 35,
        backSpeed: 20,
        loop: true,
    });

    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if (top>=60){
            $("nav").addClass('secondary-bg')
        }
        else{
            if($("nav").hasClass('secondary-bg')){
                $("nav").removeClass('secondary-bg');
            }
        }
    });
});r
