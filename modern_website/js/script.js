jQuery(document).ready(function () {
    "use strict"
    $('.slider').ripples({
        dropRadius: 11,
        perturbance: 0.01,
    });


    var typed = new Typed('#text-txt', {
        strings: ["I'm just <span class='primary'>learning...</span>", "and it's <span class='second'>awesome!!!</span>"],
        typeSpeed: 35,
        backSpeed: 20,
        loop: true,
    });


    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass('secondary-bg')
        }
        else {
            if ($("nav").hasClass('secondary-bg')) {
                $("nav").removeClass('secondary-bg');
            }
        }
    });


    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
    });


    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
        }
    });


    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    $(document).ready(function () {
        $('a[href^="#"].nav-btnlink').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 100
            }, 900, 'swing', function () {
                window.location.hash = target - 100;
            });
        });
    });


    new WOW().init();
});
