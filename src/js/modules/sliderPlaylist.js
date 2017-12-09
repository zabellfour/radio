var sliderPlaylist = {
    init: function() {
        var slider = $('.slider-playlist');
        if (!slider) {
            return;
        }
        slider.owlCarousel({
            items: 3,
            dots: false,
            nav: true
        });

    }
};

export default sliderPlaylist;