var sliderBaner = {
    init: function() {
        var slider = $('.slider-baner');
        if (!slider) {
            return;
        }
        slider.owlCarousel({
            items: 1,
            smartSpeed: 1000
        });
    }
};

export default sliderBaner;