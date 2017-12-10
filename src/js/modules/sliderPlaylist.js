var sliderPlaylist = {
    init: function() {
        var slider = $('.slider-playlist');
        if (!slider) {
            return;
        }
        slider.owlCarousel({
            dots: false,
            nav: true,
            responsive : {
                0 : {
                    items: 2,
                },
                1024 : {
                    items: 3,
                }
            }
        });

    }
};

export default sliderPlaylist;