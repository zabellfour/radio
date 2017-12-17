var customVideo = {
    init: function() {
        var videoEl = $('.video-custom');
        if (!videoEl) {
            return;
        }
        plyr.setup(document.querySelectorAll('.video-custom'), {
            controls:['play-large', 'play','mute', 'volume', 'captions', 'fullscreen']
        });
        plyr.setup(document.querySelectorAll('[data-video-id]'), {
            controls:['play-large', 'play','mute', 'volume', 'captions', 'fullscreen']
        });
       
    }
};

export default customVideo; 