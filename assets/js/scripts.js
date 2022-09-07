/*
* ----------------------------------------------------------------------------------------
Author       : Md samsuzzaman
Template Name: Vlaca - Creative Portfolio Showcase Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/
(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on('load', function () {
            $('.loader').fadeOut();
            $('#preloader-area').delay(350).fadeOut('slow');

            $('.text-rotator').each(function () {

                var text_rotator_content = $(this).html();
                $(this).empty();
                $(this).html('<div class="rotator-wrap"></div>')
                var this_item = $(this).children('.rotator-wrap');
                var text_rotator_content_split = text_rotator_content.split(',');
                var item_size = text_rotator_content_split.length;
                nova_text_rotator(text_rotator_content_split, this_item, item_size);
            });

            function nova_text_rotator(item_array, this_item, item_size, my_index) {

                if (my_index == undefined)
                    var my_index = -1;

                my_index++

                if (my_index < item_size) {

                    this_item.fadeOut(800, function () {
                        this_item.html('<span>' + item_array[my_index] + '</span>');
                        this_item.fadeIn(800);

                    });
                } else {
                    my_index = -1;
                }

                setTimeout(function () {
                    nova_text_rotator(item_array, this_item, item_size, my_index);
                }, 2500);
            }
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND JS
         * ----------------------------------------------------------------------------------------
         */
        var headertopoption = $(window);
        var headTop = $('.header-top-area');

        headertopoption.on('scroll', function () {
            if (headertopoption.scrollTop() > 200) {
                headTop.addClass('menu-bg');
            } else {
                headTop.removeClass('menu-bg');
            }
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */


        var magnifPopup = function () {
            $('.img-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
            });
        };
        // Call the functions 
        magnifPopup();
        
        $('.work-items .work-box').each(function () {
            $(this).on('mouseenter', function () {
                if ($(this).data('title')) {
                    $('.work-titles').html($(this).data('title') + '<span class="work_cat">' + $(this).data('category') + '</span>');
                    $('.work-titles').addClass('visible');
                }

                $(document).on('mousemove', function (e) {
                    $('.work-titles').css({
                        left: e.clientX - 10,
                        top: e.clientY + 25
                    });
                });
            }).on('mouseleave', function () {
                $('.work-titles').removeClass('visible');
            });
        });
        /*
         * ----------------------------------------------------------------------------------------
         *  PARALLAX JS
         * ----------------------------------------------------------------------------------------
         */

        var parallaxeffect = $(window);
        parallaxeffect.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  TESTIMONIAL JS
         * ----------------------------------------------------------------------------------------
         */

        $(".testimonial-list").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  SCROOL TO UP JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 250) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();



        $(".mainmenu-icons").on('click', function () {
            $(".off-canvas-menu").addClass("active");
            $(".offcanves-menu-overlay").addClass("active");
        });
        $(".menu-close i.fa, .offcanves-menu-overlay, .menu-item-inner li a").on('click', function () {
            $(".off-canvas-menu").removeClass("active");
            $(".offcanves-menu-overlay").removeClass("active");
        });

        


    });

})(jQuery);
