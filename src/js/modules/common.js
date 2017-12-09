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

    }
};

export default common;