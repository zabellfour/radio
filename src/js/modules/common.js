// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var common = {
    headerSlider: function() {
        var $slEl = $('.program-slider');
        if (!$slEl.length) {
            return false;
        }
        $slEl.owlCarousel({
            items: 4,
            dots: false,
            nav: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2

                },

                480: {
                    items: 3
                },
                1024: {
                    items: 4
                }

            }
        });
    },
    mobMenu: function() {
        var $menuOpener = $('.menu-opener'),
            $body = $('body'),
            $formEl = $('.header-top .search-form'),
            $logoEl = $('.logo-full');
        if (!$menuOpener.length) {
            return false;
        }
        $menuOpener.on('click', function() {
            $body.toggleClass('open-menu');
        });
        $formEl.on('click', function() {
            if (window.innerWidth < 480) {
                $formEl.addClass('opened');
                $logoEl.addClass('hide');
            }
        });
        $(window).on('resize', function() {
            if (window.innerWidth >= 480) {
                $formEl.removeClass('opened');
                $logoEl.removeClass('hide');
            }



        });
        $('.mh-item').matchHeight({
            byRow: false
        });
    }

};

export default common;