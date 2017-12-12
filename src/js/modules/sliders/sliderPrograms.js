var sliderPrograms = {
    init: function() {
        var slider = $('.program-slider');
        if (!slider) {
            return;
        }
        slider.owlCarousel({
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

export default sliderPrograms;