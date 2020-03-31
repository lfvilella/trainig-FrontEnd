jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 11,
        perturbance: 0.01,
    });

    var typed = new Typed('#text-txt', {
        strings:["I just <span class='primary'>learning...</span>", "and it's <span class='second'>awesome!!!</span>"],
        typeSpeed: 35,
        backSpeed: 20,
        loop: true,
    });

});
