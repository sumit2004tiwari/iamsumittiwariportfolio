(function($) {
    'use strict';

    // slick-slider
    $('.slick-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        loop: true,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.counter').addClass('animated fadeInDownBig');
    $('h3').addClass('animated fadeIn');

    // Type js
    var typed = new Typed('.element', {
        strings: ["Freelancer", "Developer", "Designer", "Photographer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        startDelay: 100,
        loop: true,
    });

    // ScrollTop
    $('body').materialScrollTop();

    // one page nav
    $("#nav").onePageNav({
        currentClass: "current",
    });

    $('.counterup').counterUp({
        delay: 100,
        time: 3000
    });

    // Theme Switcher 
    const input = document.querySelector(".theme-switcher-label input");
    input.addEventListener("change", (e) => {
        if (e.target.checked) {
            document.body.setAttribute("data-theme", "light");
        } else {
            document.body.setAttribute("data-theme", "dark");
        }
        let themebuttons = document.querySelectorAll('.theme-buttons');
    });

    const toggle = document.getElementById('toggleDark');
    toggle.addEventListener('click', function() {
        this.classList.toggle('fasfa-moon');
    });

    // Portfolio Fancybox
    var mixer = mixitup(".portfolio-list");
    $(".gallery a").attr("data-fancybox", "mygallery"), $(".gallery a").each(function() {
            $(this).attr("data-caption", $(this).find("img").attr("alt")), $(this).attr("title", $(this).find("img").attr("alt"))
        }),
        $(".gallery a").fancybox(), $("[data-fancybox]").fancybox({
            selector: ".mix:visible a",
            loop: !0,
            hash: !0,
            transitionEffect: "slide",
            clickContent: function(t, e) {
                return "image" === t.type && "next"
            }
        });

    // Aos Scroll 
    AOS.init();

    // Preloader
    $(document).ready(function() {
        setTimeout(function() {
            $('body').addClass('loaded');

        }, 1000);
    });

    // Menu Fixed
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $('.header-area').addClass('menu_fixed');
        } else {
            $('.header-area').removeClass('menu_fixed');
        }
    });

    // Mobile Menu
    $("#offcanvasExample a").click(function() {
        $('.offcanvas').offcanvas('hide');
    });
    $("#nav").onePageNav({
        currentClass: "current",
    });
})(jQuery);