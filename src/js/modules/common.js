// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var common = {
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