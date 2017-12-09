// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var common = {
    headerSlider: function() {
        console.log(12);
        var $slEl = $('.program-slider');
        if (!$slEl.length) {
            return false;
        }
        $slEl.owlCarousel({
            items: 4,
            dots: false,
            nav: true
        });

    }
};

export default common;