(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _common = require('./modules/common');

var _common2 = _interopRequireDefault(_common);

var _accordionActive = require('./modules/accordionActive');

var _accordionActive2 = _interopRequireDefault(_accordionActive);

var _sliderPrograms = require('./modules/sliders/sliderPrograms');

var _sliderPrograms2 = _interopRequireDefault(_sliderPrograms);

var _sliderPlaylist = require('./modules/sliders/sliderPlaylist');

var _sliderPlaylist2 = _interopRequireDefault(_sliderPlaylist);

var _sliderBaner = require('./modules/sliders/sliderBaner');

var _sliderBaner2 = _interopRequireDefault(_sliderBaner);

var _customSelect = require('./modules/customSelect');

var _customSelect2 = _interopRequireDefault(_customSelect);

var _map = require('./modules/map');

var _map2 = _interopRequireDefault(_map);

var _video = require('./modules/video');

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Maps 


//Sliders
// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
    'use strict';
    // When DOM is ready

    $(function () {
        _common2.default.mobMenu();
        _accordionActive2.default.init();
        // Sliders init
        _sliderPrograms2.default.init();
        _sliderPlaylist2.default.init();
        _sliderBaner2.default.init();
        //Forms
        _customSelect2.default.init();
        _map2.default.init();
        _video2.default.init();
    });
})(jQuery);

//Custom Video


//Forms

},{"./modules/accordionActive":2,"./modules/common":3,"./modules/customSelect":4,"./modules/map":5,"./modules/sliders/sliderBaner":6,"./modules/sliders/sliderPlaylist":7,"./modules/sliders/sliderPrograms":8,"./modules/video":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var accordionActive = {
	init: function init() {
		var accordion = $('#accordion');
		if (!accordion) {
			return;
		}
		$('.panel-heading a').click(function () {
			$('.panel-heading').removeClass('active');
			if (!$(this).closest('.panel').find('.panel-collapse').hasClass('in')) $(this).parents('.panel-heading').addClass('active');
		});
	}
};

exports.default = accordionActive;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var common = {
    mobMenu: function mobMenu() {
        var $menuOpener = $('.menu-opener'),
            $body = $('body'),
            $formEl = $('.header-top .search-form'),
            $logoEl = $('.logo-full');
        if (!$menuOpener.length) {
            return false;
        }
        $menuOpener.on('click', function () {
            $body.toggleClass('open-menu');
        });
        $formEl.on('click', function () {
            if (window.innerWidth < 480) {
                $formEl.addClass('opened');
                $logoEl.addClass('hide');
            }
        });
        $(window).on('resize', function () {
            if (window.innerWidth >= 480) {
                $formEl.removeClass('opened');
                $logoEl.removeClass('hide');
            }
            if (window.innerWidth < 768) {
                subMenuOpen();
            }
            if (window.innerWidth > 767) {
                $body.removeClass('open-menu');
            }
        });
        function subMenuOpen() {
            $('.has-dropdown > .drop-opener').off();
            $('.has-dropdown > .drop-opener').on('click', function () {
                $(this).siblings('.drop-down').slideToggle(600);
            });
        }
        subMenuOpen();
    }

};

exports.default = common;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var customSelect = {
    init: function init() {
        var elem = $('.selectpicker');
        if (!elem) {
            return;
        }
        elem.selectpicker();
    }
};

exports.default = customSelect;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var map = {
    init: function init() {
        var $map = $("#mapid");
        var latitude = parseFloat($map.data('latitude').replace(',', '.'));
        var longtitude = parseFloat($map.data('longtitude').replace(',', '.'));
        var zoom = parseFloat($map.data('zoom'));
        var map = L.map('mapid').setView([latitude, longtitude], zoom);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([latitude, longtitude]).addTo(map);
    }
};

exports.default = map;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sliderBaner = {
    init: function init() {
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

exports.default = sliderBaner;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sliderPlaylist = {
    init: function init() {
        var slider = $('.slider-playlist');
        if (!slider) {
            return;
        }
        slider.owlCarousel({
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }
};

exports.default = sliderPlaylist;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sliderPrograms = {
    init: function init() {
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

exports.default = sliderPrograms;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var customVideo = {
    init: function init() {
        var videoEl = $('.video-custom');
        if (!videoEl) {
            return;
        }
        plyr.setup(document.querySelectorAll('.video-custom'), {
            controls: ['play-large', 'play', 'mute', 'volume', 'captions', 'fullscreen']
        });
        plyr.setup(document.querySelectorAll('[data-video-id]'), {
            controls: ['play-large', 'play', 'mute', 'volume', 'captions', 'fullscreen']
        });
    }
};

exports.default = customVideo;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxhY2NvcmRpb25BY3RpdmUuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxjb21tb24uanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxjdXN0b21TZWxlY3QuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxtYXAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxzbGlkZXJzXFxzbGlkZXJCYW5lci5qcyIsInNyY1xcanNcXG1vZHVsZXNcXHNsaWRlcnNcXHNsaWRlclBsYXlsaXN0LmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcc2xpZGVyc1xcc2xpZGVyUHJvZ3JhbXMuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFx2aWRlby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBR0E7Ozs7QUFHQTs7Ozs7O0FBSkE7OztBQVJBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7O0FBbUJBLENBQUMsVUFBQyxDQUFELEVBQU87QUFDSjtBQUNBOztBQUNBLE1BQUUsWUFBTTtBQUNKLHlCQUFPLE9BQVA7QUFDQSxrQ0FBZ0IsSUFBaEI7QUFDQTtBQUNBLGlDQUFlLElBQWY7QUFDQSxpQ0FBZSxJQUFmO0FBQ0EsOEJBQVksSUFBWjtBQUNBO0FBQ0EsK0JBQWEsSUFBYjtBQUNBLHNCQUFJLElBQUo7QUFDQSx3QkFBWSxJQUFaO0FBRUgsS0FaRDtBQWVILENBbEJELEVBa0JHLE1BbEJIOztBQUhBOzs7QUFOQTs7Ozs7Ozs7QUNiQSxJQUFJLGtCQUFrQjtBQUNyQixPQUFNLGdCQUFXO0FBQ2hCLE1BQUksWUFBWSxFQUFFLFlBQUYsQ0FBaEI7QUFDQSxNQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNmO0FBQ0E7QUFDRCxJQUFFLGtCQUFGLEVBQXNCLEtBQXRCLENBQTRCLFlBQVc7QUFD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QWM7QUFDZCxVQUFNLGdCQUFXO0FBQ2IsWUFBSSxVQUFVLEVBQUUsZUFBRixDQUFkO0FBQ0EsWUFBSSxDQUFDLE9BQUwsRUFBYztBQUNWO0FBQ0g7QUFDRCxhQUFLLEtBQUwsQ0FBVyxTQUFTLGdCQUFULENBQTBCLGVBQTFCLENBQVgsRUFBdUQ7QUFDbkQsc0JBQVMsQ0FBQyxZQUFELEVBQWUsTUFBZixFQUFzQixNQUF0QixFQUE4QixRQUE5QixFQUF3QyxVQUF4QyxFQUFvRCxZQUFwRDtBQUQwQyxTQUF2RDtBQUdBLGFBQUssS0FBTCxDQUFXLFNBQVMsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQVgsRUFBeUQ7QUFDckQsc0JBQVMsQ0FBQyxZQUFELEVBQWUsTUFBZixFQUFzQixNQUF0QixFQUE4QixRQUE5QixFQUF3QyxVQUF4QyxFQUFvRCxZQUFwRDtBQUQ0QyxTQUF6RDtBQUlIO0FBYmEsQ0FBbEI7O2tCQWdCZSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxyXG4vL1xyXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXHJcbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxyXG5cclxuaW1wb3J0IGNvbW1vbiBmcm9tICcuL21vZHVsZXMvY29tbW9uJztcclxuaW1wb3J0IGFjY29yZGlvbkFjdGl2ZSBmcm9tICcuL21vZHVsZXMvYWNjb3JkaW9uQWN0aXZlJztcclxuXHJcbi8vU2xpZGVyc1xyXG5pbXBvcnQgc2xpZGVyUHJvZ3JhbXMgZnJvbSAnLi9tb2R1bGVzL3NsaWRlcnMvc2xpZGVyUHJvZ3JhbXMnO1xyXG5pbXBvcnQgc2xpZGVyUGxheWxpc3QgZnJvbSAnLi9tb2R1bGVzL3NsaWRlcnMvc2xpZGVyUGxheWxpc3QnO1xyXG5pbXBvcnQgc2xpZGVyQmFuZXIgZnJvbSAnLi9tb2R1bGVzL3NsaWRlcnMvc2xpZGVyQmFuZXInO1xyXG5cclxuLy9Gb3Jtc1xyXG5pbXBvcnQgY3VzdG9tU2VsZWN0IGZyb20gJy4vbW9kdWxlcy9jdXN0b21TZWxlY3QnO1xyXG5cclxuLy9NYXBzIFxyXG5pbXBvcnQgbWFwIGZyb20gJy4vbW9kdWxlcy9tYXAnO1xyXG5cclxuLy9DdXN0b20gVmlkZW9cclxuaW1wb3J0IGN1c3RvbVZpZGVvIGZyb20gJy4vbW9kdWxlcy92aWRlbyc7XHJcblxyXG4oKCQpID0+IHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIC8vIFdoZW4gRE9NIGlzIHJlYWR5XHJcbiAgICAkKCgpID0+IHtcclxuICAgICAgICBjb21tb24ubW9iTWVudSgpO1xyXG4gICAgICAgIGFjY29yZGlvbkFjdGl2ZS5pbml0KCk7XHJcbiAgICAgICAgLy8gU2xpZGVycyBpbml0XHJcbiAgICAgICAgc2xpZGVyUHJvZ3JhbXMuaW5pdCgpO1xyXG4gICAgICAgIHNsaWRlclBsYXlsaXN0LmluaXQoKTtcclxuICAgICAgICBzbGlkZXJCYW5lci5pbml0KCk7XHJcbiAgICAgICAgLy9Gb3Jtc1xyXG4gICAgICAgIGN1c3RvbVNlbGVjdC5pbml0KCk7XHJcbiAgICAgICAgbWFwLmluaXQoKTtcclxuICAgICAgICBjdXN0b21WaWRlby5pbml0KCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxufSkoalF1ZXJ5KTsiLCJ2YXIgYWNjb3JkaW9uQWN0aXZlID0ge1xyXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGFjY29yZGlvbiA9ICQoJyNhY2NvcmRpb24nKTtcclxuXHRcdGlmICghYWNjb3JkaW9uKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdCQoJy5wYW5lbC1oZWFkaW5nIGEnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLnBhbmVsLWhlYWRpbmcnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdGlmKCEkKHRoaXMpLmNsb3Nlc3QoJy5wYW5lbCcpLmZpbmQoJy5wYW5lbC1jb2xsYXBzZScpLmhhc0NsYXNzKCdpbicpKVxyXG5cdFx0XHRcdCQodGhpcykucGFyZW50cygnLnBhbmVsLWhlYWRpbmcnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvcmRpb25BY3RpdmU7IiwiLy8gVGhpcyBpcyBhbiBleGFtcGxlcyBvZiBzaW1wbGUgZXhwb3J0LlxyXG4vL1xyXG4vLyBZb3UgY2FuIHJlbW92ZSBvciBhZGQgeW91ciBvd24gZnVuY3Rpb24gaW4gdGhpcyBmaWxlLlxyXG5cclxudmFyIGNvbW1vbiA9IHtcclxuICAgIG1vYk1lbnU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkbWVudU9wZW5lciA9ICQoJy5tZW51LW9wZW5lcicpLFxyXG4gICAgICAgICAgICAkYm9keSA9ICQoJ2JvZHknKSxcclxuICAgICAgICAgICAgJGZvcm1FbCA9ICQoJy5oZWFkZXItdG9wIC5zZWFyY2gtZm9ybScpLFxyXG4gICAgICAgICAgICAkbG9nb0VsID0gJCgnLmxvZ28tZnVsbCcpO1xyXG4gICAgICAgIGlmICghJG1lbnVPcGVuZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJG1lbnVPcGVuZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICRib2R5LnRvZ2dsZUNsYXNzKCdvcGVuLW1lbnUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkZm9ybUVsLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA0ODApIHtcclxuICAgICAgICAgICAgICAgICRmb3JtRWwuYWRkQ2xhc3MoJ29wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgJGxvZ29FbC5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDQ4MCkge1xyXG4gICAgICAgICAgICAgICAgJGZvcm1FbC5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAkbG9nb0VsLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51T3BlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2Nykge1xyXG4gICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW4tbWVudScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gc3ViTWVudU9wZW4oKXtcclxuICAgICAgICAgICAgJCgnLmhhcy1kcm9wZG93biA+IC5kcm9wLW9wZW5lcicpLm9mZigpO1xyXG4gICAgICAgICAgICAkKCcuaGFzLWRyb3Bkb3duID4gLmRyb3Atb3BlbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5kcm9wLWRvd24nKS5zbGlkZVRvZ2dsZSg2MDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViTWVudU9wZW4oKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tb247IiwidmFyIGN1c3RvbVNlbGVjdCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtID0gJCgnLnNlbGVjdHBpY2tlcicpO1xyXG4gICAgICAgIGlmICghZWxlbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW0uc2VsZWN0cGlja2VyKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXN0b21TZWxlY3Q7IiwidmFyIG1hcCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkbWFwID0gJChcIiNtYXBpZFwiKTtcclxuICAgICAgICB2YXIgbGF0aXR1ZGUgPSBwYXJzZUZsb2F0KCRtYXAuZGF0YSgnbGF0aXR1ZGUnKS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICAgICAgdmFyIGxvbmd0aXR1ZGUgPSBwYXJzZUZsb2F0KCRtYXAuZGF0YSgnbG9uZ3RpdHVkZScpLnJlcGxhY2UoJywnLCAnLicpKTtcclxuICAgICAgICB2YXIgem9vbSA9IHBhcnNlRmxvYXQoJG1hcC5kYXRhKCd6b29tJykpO1xyXG4gICAgICAgIHZhciBtYXAgPSBMLm1hcCgnbWFwaWQnKS5zZXRWaWV3KFtsYXRpdHVkZSwgbG9uZ3RpdHVkZV0sIHpvb20pOyBcclxuICAgICAgICBMLnRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9zbS5vcmcve3p9L3t4fS97eX0ucG5nJywge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29zbS5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgTC5tYXJrZXIoW2xhdGl0dWRlLGxvbmd0aXR1ZGVdKS5hZGRUbyhtYXApO1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcDsiLCJ2YXIgc2xpZGVyQmFuZXIgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2xpZGVyID0gJCgnLnNsaWRlci1iYW5lcicpO1xyXG4gICAgICAgIGlmICghc2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVyLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDEwMDBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlckJhbmVyOyIsInZhciBzbGlkZXJQbGF5bGlzdCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzbGlkZXIgPSAkKCcuc2xpZGVyLXBsYXlsaXN0Jyk7XHJcbiAgICAgICAgaWYgKCFzbGlkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMDI0IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyUGxheWxpc3Q7IiwidmFyIHNsaWRlclByb2dyYW1zID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNsaWRlciA9ICQoJy5wcm9ncmFtLXNsaWRlcicpO1xyXG4gICAgICAgIGlmICghc2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVyLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrcG9pbnQgZnJvbSAwIHVwXHJcbiAgICAgICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyUHJvZ3JhbXM7IiwidmFyIGN1c3RvbVZpZGVvID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHZpZGVvRWwgPSAkKCcudmlkZW8tY3VzdG9tJyk7XHJcbiAgICAgICAgaWYgKCF2aWRlb0VsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGx5ci5zZXR1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlkZW8tY3VzdG9tJyksIHtcclxuICAgICAgICAgICAgY29udHJvbHM6WydwbGF5LWxhcmdlJywgJ3BsYXknLCdtdXRlJywgJ3ZvbHVtZScsICdjYXB0aW9ucycsICdmdWxsc2NyZWVuJ11cclxuICAgICAgICB9KTtcclxuICAgICAgICBwbHlyLnNldHVwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZpZGVvLWlkXScpLCB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xzOlsncGxheS1sYXJnZScsICdwbGF5JywnbXV0ZScsICd2b2x1bWUnLCAnY2FwdGlvbnMnLCAnZnVsbHNjcmVlbiddXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbVZpZGVvOyAiXX0=
