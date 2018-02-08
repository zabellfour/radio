(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _common = require('./modules/common');

var _common2 = _interopRequireDefault(_common);

var _accordionActive = require('./modules/accordionActive');

var _accordionActive2 = _interopRequireDefault(_accordionActive);

var _clock = require('./modules/clock');

var _clock2 = _interopRequireDefault(_clock);

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
        //custom-clock
        _clock2.default.init();
    });
})(jQuery);

//Custom Video


//Forms
// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/accordionActive":2,"./modules/clock":3,"./modules/common":4,"./modules/customSelect":5,"./modules/map":6,"./modules/sliders/sliderBaner":7,"./modules/sliders/sliderPlaylist":8,"./modules/sliders/sliderPrograms":9,"./modules/video":10}],2:[function(require,module,exports){
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
var customClock = {
    init: function init() {
        var customClock = $('#header-clock svg');
        if (!customClock) {
            return;
        }
        var dotS = customClock.find('#dots path'),
            dotH = customClock.find('#doth path'),
            sep = customClock.find('#separator'),
            min_1 = customClock.find('#min_1 path'),
            min_2 = customClock.find('#min_2 path'),
            hr_1 = customClock.find('#hr_1 path'),
            hr_2 = customClock.find('#hr_2 path');
        //codes of digits
        var dataNumers = [[0, 1, 2, 3, 4, 5, 6, 7, 14, 21, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 27, 20, 13], [0, 1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 6, 7, 10, 13, 14, 17, 20, 21, 24, 27, 28, 32, 33, 34], [0, 1, 2, 4, 5, 6, 7, 10, 13, 14, 17, 20, 21, 24, 27, 28, 34], [0, 1, 2, 3, 4, 5, 6, 10, 17, 24, 28, 29, 30, 31], [0, 4, 5, 6, 7, 14, 21, 28, 29, 30, 31, 24, 17, 10, 3, 13, 20, 27, 34], [0, 4, 5, 6, 7, 14, 21, 28, 29, 30, 31, 24, 17, 10, 3, 13, 20, 27, 34, 33, 32], [0, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28], [0, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 29, 30, 31, 32, 33, 34, 35, 36, 28, 20, 13, 10, 17, 24, 27], [0, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 29, 30, 31, 35, 36, 27, 20, 13, 10, 17, 24, 34]];

        dotH.css("fill-opacity", "1");
        window.setInterval(function () {
            $(dotS).css("fill-opacity", "0");
            var date = new Date();
            var seconds = date.getSeconds(),
                minutes = date.getMinutes(),
                hours = date.getHours(),
                sec1 = 0,
                sec2 = 0,
                min1 = 0,
                min2 = 0,
                hr1 = 0,
                hr2 = 0;
            if (seconds <= 9) {
                sec1 = seconds;
                sec2 = 0;
            } else {
                sec1 = (seconds + '')[1] * 1;
                sec2 = (seconds + '')[0] * 1;
            }
            if (minutes <= 9) {
                min1 = minutes;
                min2 = 0;
            } else {
                min1 = (minutes + '')[1] * 1;
                min2 = (minutes + '')[0] * 1;
            }
            if (hours <= 9) {
                hr1 = hours;
                hr2 = 0;
            } else {
                hr1 = (hours + '')[1] * 1;
                hr2 = (hours + '')[0] * 1;
            }
            for (var i = 0; i <= seconds; i++) {
                $(dotS[i]).css("fill-opacity", "1");
                if (i % 2) {
                    sep.css("fill-opacity", "1");
                } else {
                    sep.css("fill-opacity", "0");
                }
            }
            drow(min_1, min1);
            drow(min_2, min2);
            drow(hr_1, hr1);
            drow(hr_2, hr2);
        }, 1000);

        function drow(numberEl, value) {
            $(numberEl).css("fill-opacity", "0");
            for (var j = 0; j <= 9; j++) {
                if (j === value) {
                    for (var n = 0; n <= dataNumers[j].length; n++) {
                        $(numberEl[dataNumers[j][n]]).css("fill-opacity", "1");
                    }
                }
            }
        }
    }
};

exports.default = customClock;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxhY2NvcmRpb25BY3RpdmUuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxjbG9jay5qcyIsInNyY1xcanNcXG1vZHVsZXNcXGNvbW1vbi5qcyIsInNyY1xcanNcXG1vZHVsZXNcXGN1c3RvbVNlbGVjdC5qcyIsInNyY1xcanNcXG1vZHVsZXNcXG1hcC5qcyIsInNyY1xcanNcXG1vZHVsZXNcXHNsaWRlcnNcXHNsaWRlckJhbmVyLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcc2xpZGVyc1xcc2xpZGVyUGxheWxpc3QuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxzbGlkZXJzXFxzbGlkZXJQcm9ncmFtcy5qcyIsInNyY1xcanNcXG1vZHVsZXNcXHZpZGVvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUdBOzs7O0FBR0E7Ozs7OztBQUpBOzs7QUFSQTtBQWNBLENBQUMsVUFBQyxDQUFELEVBQU87QUFDSjtBQUNBOztBQUNBLE1BQUUsWUFBTTtBQUNKLHlCQUFPLE9BQVA7QUFDQSxrQ0FBZ0IsSUFBaEI7QUFDQTtBQUNBLGlDQUFlLElBQWY7QUFDQSxpQ0FBZSxJQUFmO0FBQ0EsOEJBQVksSUFBWjtBQUNBO0FBQ0EsK0JBQWEsSUFBYjtBQUNBLHNCQUFJLElBQUo7QUFDQSx3QkFBWSxJQUFaO0FBQ0E7QUFDQSx3QkFBWSxJQUFaO0FBRUgsS0FkRDtBQWlCSCxDQXBCRCxFQW9CRyxNQXBCSDs7QUFIQTs7O0FBTkE7QUFkQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQSxJQUFJLGtCQUFrQjtBQUNyQixPQUFNLGdCQUFXO0FBQ2hCLE1BQUksWUFBWSxFQUFFLFlBQUYsQ0FBaEI7QUFDQSxNQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNmO0FBQ0E7QUFDRCxJQUFFLGtCQUFGLEVBQXNCLEtBQXRCLENBQTRCLFlBQVc7QUFDdEMsS0FBRSxnQkFBRixFQUFvQixXQUFwQixDQUFnQyxRQUFoQztBQUNBLE9BQUcsQ0FBQyxFQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLFFBQWhCLEVBQTBCLElBQTFCLENBQStCLGlCQUEvQixFQUFrRCxRQUFsRCxDQUEyRCxJQUEzRCxDQUFKLEVBQ0MsRUFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixnQkFBaEIsRUFBa0MsUUFBbEMsQ0FBMkMsUUFBM0M7QUFDRCxHQUpEO0FBS0E7QUFYb0IsQ0FBdEI7O2tCQWNlLGU7Ozs7Ozs7O0FDZGYsSUFBSSxjQUFjO0FBQ2QsVUFBTSxnQkFBVztBQUNiLFlBQUksY0FBYyxFQUFFLG1CQUFGLENBQWxCO0FBQ0EsWUFBSSxDQUFDLFdBQUwsRUFBa0I7QUFDZDtBQUNIO0FBQ0QsWUFBSSxPQUFPLFlBQVksSUFBWixDQUFpQixZQUFqQixDQUFYO0FBQUEsWUFDSSxPQUFPLFlBQVksSUFBWixDQUFpQixZQUFqQixDQURYO0FBQUEsWUFFSSxNQUFNLFlBQVksSUFBWixDQUFpQixZQUFqQixDQUZWO0FBQUEsWUFHSSxRQUFRLFlBQVksSUFBWixDQUFpQixhQUFqQixDQUhaO0FBQUEsWUFJSSxRQUFRLFlBQVksSUFBWixDQUFpQixhQUFqQixDQUpaO0FBQUEsWUFLSSxPQUFPLFlBQVksSUFBWixDQUFpQixZQUFqQixDQUxYO0FBQUEsWUFNSSxPQUFPLFlBQVksSUFBWixDQUFpQixZQUFqQixDQU5YO0FBT0E7QUFDQSxZQUFJLGFBQWEsQ0FDYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELEVBQXlELEVBQXpELEVBQTZELEVBQTdELEVBQWlFLEVBQWpFLEVBQXFFLEVBQXJFLEVBQXlFLEVBQXpFLEVBQTZFLEVBQTdFLEVBQWlGLEVBQWpGLENBRGEsRUFFYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBRmEsRUFHYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCLEVBQS9CLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDLEVBQTJDLEVBQTNDLEVBQStDLEVBQS9DLEVBQW1ELEVBQW5ELEVBQXVELEVBQXZELEVBQTJELEVBQTNELEVBQStELEVBQS9ELENBSGEsRUFJYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDLEVBQTBDLEVBQTFDLEVBQThDLEVBQTlDLEVBQWtELEVBQWxELEVBQXNELEVBQXRELEVBQTBELEVBQTFELENBSmEsRUFLYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDLEVBQTBDLEVBQTFDLEVBQThDLEVBQTlDLENBTGEsRUFNYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLEVBQTRDLEVBQTVDLEVBQWdELEVBQWhELEVBQW9ELENBQXBELEVBQXVELEVBQXZELEVBQTJELEVBQTNELEVBQStELEVBQS9ELEVBQW1FLEVBQW5FLENBTmEsRUFPYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLEVBQTRDLEVBQTVDLEVBQWdELEVBQWhELEVBQW9ELENBQXBELEVBQXVELEVBQXZELEVBQTJELEVBQTNELEVBQStELEVBQS9ELEVBQW1FLEVBQW5FLEVBQXVFLEVBQXZFLEVBQTJFLEVBQTNFLENBUGEsRUFRYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLENBUmEsRUFTYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELEVBQXlELEVBQXpELEVBQTZELEVBQTdELEVBQWlFLEVBQWpFLEVBQXFFLEVBQXJFLEVBQXlFLEVBQXpFLEVBQTZFLEVBQTdFLEVBQWlGLEVBQWpGLEVBQXFGLEVBQXJGLEVBQXlGLEVBQXpGLEVBQTZGLEVBQTdGLENBVGEsRUFVYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdC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cEQ7QUFEMEMsU0FBdkQ7QUFHQSxhQUFLLEtBQUwsQ0FBVyxTQUFTLGdCQUFULENBQTBCLGlCQUExQixDQUFYLEVBQXlEO0FBQ3JELHNCQUFTLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBc0IsTUFBdEIsRUFBOEIsUUFBOUIsRUFBd0MsVUFBeEMsRUFBb0QsWUFBcEQ7QUFENEMsU0FBekQ7QUFJSDtBQWJhLENBQWxCOztrQkFnQmUsVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBZb3UgY2FuIHdyaXRlIGEgY2FsbCBhbmQgaW1wb3J0IHlvdXIgZnVuY3Rpb25zIGluIHRoaXMgZmlsZS5cclxuLy9cclxuLy8gVGhpcyBmaWxlIHdpbGwgYmUgY29tcGlsZWQgaW50byBhcHAuanMgYW5kIHdpbGwgbm90IGJlIG1pbmlmaWVkLlxyXG4vLyBGZWVsIGZyZWUgd2l0aCB1c2luZyBFUzYgaGVyZS5cclxuXHJcbmltcG9ydCBjb21tb24gZnJvbSAnLi9tb2R1bGVzL2NvbW1vbic7XHJcbmltcG9ydCBhY2NvcmRpb25BY3RpdmUgZnJvbSAnLi9tb2R1bGVzL2FjY29yZGlvbkFjdGl2ZSc7XHJcbmltcG9ydCBjdXN0b21DbG9jayBmcm9tICcuL21vZHVsZXMvY2xvY2snO1xyXG5cclxuLy9TbGlkZXJzXHJcbmltcG9ydCBzbGlkZXJQcm9ncmFtcyBmcm9tICcuL21vZHVsZXMvc2xpZGVycy9zbGlkZXJQcm9ncmFtcyc7XHJcbmltcG9ydCBzbGlkZXJQbGF5bGlzdCBmcm9tICcuL21vZHVsZXMvc2xpZGVycy9zbGlkZXJQbGF5bGlzdCc7XHJcbmltcG9ydCBzbGlkZXJCYW5lciBmcm9tICcuL21vZHVsZXMvc2xpZGVycy9zbGlkZXJCYW5lcic7XHJcblxyXG4vL0Zvcm1zXHJcbmltcG9ydCBjdXN0b21TZWxlY3QgZnJvbSAnLi9tb2R1bGVzL2N1c3RvbVNlbGVjdCc7XHJcblxyXG4vL01hcHMgXHJcbmltcG9ydCBtYXAgZnJvbSAnLi9tb2R1bGVzL21hcCc7XHJcblxyXG4vL0N1c3RvbSBWaWRlb1xyXG5pbXBvcnQgY3VzdG9tVmlkZW8gZnJvbSAnLi9tb2R1bGVzL3ZpZGVvJztcclxuXHJcbigoJCkgPT4ge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgLy8gV2hlbiBET00gaXMgcmVhZHlcclxuICAgICQoKCkgPT4ge1xyXG4gICAgICAgIGNvbW1vbi5tb2JNZW51KCk7XHJcbiAgICAgICAgYWNjb3JkaW9uQWN0aXZlLmluaXQoKTtcclxuICAgICAgICAvLyBTbGlkZXJzIGluaXRcclxuICAgICAgICBzbGlkZXJQcm9ncmFtcy5pbml0KCk7XHJcbiAgICAgICAgc2xpZGVyUGxheWxpc3QuaW5pdCgpO1xyXG4gICAgICAgIHNsaWRlckJhbmVyLmluaXQoKTtcclxuICAgICAgICAvL0Zvcm1zXHJcbiAgICAgICAgY3VzdG9tU2VsZWN0LmluaXQoKTtcclxuICAgICAgICBtYXAuaW5pdCgpO1xyXG4gICAgICAgIGN1c3RvbVZpZGVvLmluaXQoKTtcclxuICAgICAgICAvL2N1c3RvbS1jbG9ja1xyXG4gICAgICAgIGN1c3RvbUNsb2NrLmluaXQoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG59KShqUXVlcnkpOyIsInZhciBhY2NvcmRpb25BY3RpdmUgPSB7XHJcblx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgYWNjb3JkaW9uID0gJCgnI2FjY29yZGlvbicpO1xyXG5cdFx0aWYgKCFhY2NvcmRpb24pIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0JCgnLnBhbmVsLWhlYWRpbmcgYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcucGFuZWwtaGVhZGluZycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0aWYoISQodGhpcykuY2xvc2VzdCgnLnBhbmVsJykuZmluZCgnLnBhbmVsLWNvbGxhcHNlJykuaGFzQ2xhc3MoJ2luJykpXHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcucGFuZWwtaGVhZGluZycpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjY29yZGlvbkFjdGl2ZTsiLCJ2YXIgY3VzdG9tQ2xvY2sgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY3VzdG9tQ2xvY2sgPSAkKCcjaGVhZGVyLWNsb2NrIHN2ZycpO1xyXG4gICAgICAgIGlmICghY3VzdG9tQ2xvY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZG90UyA9IGN1c3RvbUNsb2NrLmZpbmQoJyNkb3RzIHBhdGgnKSxcclxuICAgICAgICAgICAgZG90SCA9IGN1c3RvbUNsb2NrLmZpbmQoJyNkb3RoIHBhdGgnKSxcclxuICAgICAgICAgICAgc2VwID0gY3VzdG9tQ2xvY2suZmluZCgnI3NlcGFyYXRvcicpLFxyXG4gICAgICAgICAgICBtaW5fMSA9IGN1c3RvbUNsb2NrLmZpbmQoJyNtaW5fMSBwYXRoJyksXHJcbiAgICAgICAgICAgIG1pbl8yID0gY3VzdG9tQ2xvY2suZmluZCgnI21pbl8yIHBhdGgnKSxcclxuICAgICAgICAgICAgaHJfMSA9IGN1c3RvbUNsb2NrLmZpbmQoJyNocl8xIHBhdGgnKSxcclxuICAgICAgICAgICAgaHJfMiA9IGN1c3RvbUNsb2NrLmZpbmQoJyNocl8yIHBhdGgnKTtcclxuICAgICAgICAvL2NvZGVzIG9mIGRpZ2l0c1xyXG4gICAgICAgIHZhciBkYXRhTnVtZXJzID0gW1xyXG4gICAgICAgICAgICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgMTQsIDIxLCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMjcsIDIwLCAxM10sXHJcbiAgICAgICAgICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2XSxcclxuICAgICAgICAgICAgWzAsIDEsIDIsIDMsIDYsIDcsIDEwLCAxMywgMTQsIDE3LCAyMCwgMjEsIDI0LCAyNywgMjgsIDMyLCAzMywgMzRdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMiwgNCwgNSwgNiwgNywgMTAsIDEzLCAxNCwgMTcsIDIwLCAyMSwgMjQsIDI3LCAyOCwgMzRdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgMTAsIDE3LCAyNCwgMjgsIDI5LCAzMCwgMzFdLFxyXG4gICAgICAgICAgICBbMCwgNCwgNSwgNiwgNywgMTQsIDIxLCAyOCwgMjksIDMwLCAzMSwgMjQsIDE3LCAxMCwgMywgMTMsIDIwLCAyNywgMzRdLFxyXG4gICAgICAgICAgICBbMCwgNCwgNSwgNiwgNywgMTQsIDIxLCAyOCwgMjksIDMwLCAzMSwgMjQsIDE3LCAxMCwgMywgMTMsIDIwLCAyNywgMzQsIDMzLCAzMl0sXHJcbiAgICAgICAgICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCAxNCwgMjEsIDI4XSxcclxuICAgICAgICAgICAgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDE0LCAyMSwgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMjgsIDIwLCAxMywgMTAsIDE3LCAyNCwgMjddLFxyXG4gICAgICAgICAgICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgMTQsIDIxLCAyOCwgMjksIDMwLCAzMSwgMzUsIDM2LCAyNywgMjAsIDEzLCAxMCwgMTcsIDI0LCAzNF1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBkb3RILmNzcyhcImZpbGwtb3BhY2l0eVwiLCBcIjFcIik7XHJcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKGRvdFMpLmNzcyhcImZpbGwtb3BhY2l0eVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKSxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgICAgIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpLFxyXG4gICAgICAgICAgICAgICAgc2VjMSA9IDAsXHJcbiAgICAgICAgICAgICAgICBzZWMyID0gMCxcclxuICAgICAgICAgICAgICAgIG1pbjEgPSAwLFxyXG4gICAgICAgICAgICAgICAgbWluMiA9IDAsXHJcbiAgICAgICAgICAgICAgICBocjEgPSAwLFxyXG4gICAgICAgICAgICAgICAgaHIyID0gMDtcclxuICAgICAgICAgICAgaWYgKHNlY29uZHMgPD0gOSkge1xyXG4gICAgICAgICAgICAgICAgc2VjMSA9IHNlY29uZHM7XHJcbiAgICAgICAgICAgICAgICBzZWMyID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlYzEgPSAoc2Vjb25kcyArICcnKVsxXSAqIDE7XHJcbiAgICAgICAgICAgICAgICBzZWMyID0gKHNlY29uZHMgKyAnJylbMF0gKiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtaW51dGVzIDw9IDkpIHtcclxuICAgICAgICAgICAgICAgIG1pbjEgPSBtaW51dGVzO1xyXG4gICAgICAgICAgICAgICAgbWluMiA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtaW4xID0gKG1pbnV0ZXMgKyAnJylbMV0gKiAxO1xyXG4gICAgICAgICAgICAgICAgbWluMiA9IChtaW51dGVzICsgJycpWzBdICogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaG91cnMgPD0gOSkge1xyXG4gICAgICAgICAgICAgICAgaHIxID0gaG91cnM7XHJcbiAgICAgICAgICAgICAgICBocjIgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHIxID0gKGhvdXJzICsgJycpWzFdICogMTtcclxuICAgICAgICAgICAgICAgIGhyMiA9IChob3VycyArICcnKVswXSAqIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gc2Vjb25kczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAkKGRvdFNbaV0pLmNzcyhcImZpbGwtb3BhY2l0eVwiLCBcIjFcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXAuY3NzKFwiZmlsbC1vcGFjaXR5XCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VwLmNzcyhcImZpbGwtb3BhY2l0eVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHJvdyhtaW5fMSwgbWluMSk7XHJcbiAgICAgICAgICAgIGRyb3cobWluXzIsIG1pbjIpO1xyXG4gICAgICAgICAgICBkcm93KGhyXzEsIGhyMSk7XHJcbiAgICAgICAgICAgIGRyb3coaHJfMiwgaHIyKTtcclxuXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRyb3cobnVtYmVyRWwsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICQobnVtYmVyRWwpLmNzcyhcImZpbGwtb3BhY2l0eVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDw9IDk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGogPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPD0gZGF0YU51bWVyc1tqXS5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKG51bWJlckVsW2RhdGFOdW1lcnNbal1bbl1dKS5jc3MoXCJmaWxsLW9wYWNpdHlcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUNsb2NrOyIsIi8vIFRoaXMgaXMgYW4gZXhhbXBsZXMgb2Ygc2ltcGxlIGV4cG9ydC5cclxuLy9cclxuLy8gWW91IGNhbiByZW1vdmUgb3IgYWRkIHlvdXIgb3duIGZ1bmN0aW9uIGluIHRoaXMgZmlsZS5cclxuXHJcbnZhciBjb21tb24gPSB7XHJcbiAgICBtb2JNZW51OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgJG1lbnVPcGVuZXIgPSAkKCcubWVudS1vcGVuZXInKSxcclxuICAgICAgICAgICAgJGJvZHkgPSAkKCdib2R5JyksXHJcbiAgICAgICAgICAgICRmb3JtRWwgPSAkKCcuaGVhZGVyLXRvcCAuc2VhcmNoLWZvcm0nKSxcclxuICAgICAgICAgICAgJGxvZ29FbCA9ICQoJy5sb2dvLWZ1bGwnKTtcclxuICAgICAgICBpZiAoISRtZW51T3BlbmVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRtZW51T3BlbmVyLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkYm9keS50b2dnbGVDbGFzcygnb3Blbi1tZW51Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJGZvcm1FbC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNDgwKSB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybUVsLmFkZENsYXNzKCdvcGVuZWQnKTtcclxuICAgICAgICAgICAgICAgICRsb2dvRWwuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA0ODApIHtcclxuICAgICAgICAgICAgICAgICRmb3JtRWwucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgJGxvZ29FbC5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudU9wZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjcpIHtcclxuICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdvcGVuLW1lbnUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHN1Yk1lbnVPcGVuKCl7XHJcbiAgICAgICAgICAgICQoJy5oYXMtZHJvcGRvd24gPiAuZHJvcC1vcGVuZXInKS5vZmYoKTtcclxuICAgICAgICAgICAgJCgnLmhhcy1kcm9wZG93biA+IC5kcm9wLW9wZW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZHJvcC1kb3duJykuc2xpZGVUb2dnbGUoNjAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1Yk1lbnVPcGVuKCk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsInZhciBjdXN0b21TZWxlY3QgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZWxlbSA9ICQoJy5zZWxlY3RwaWNrZXInKTtcclxuICAgICAgICBpZiAoIWVsZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtLnNlbGVjdHBpY2tlcigpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tU2VsZWN0OyIsInZhciBtYXAgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgJG1hcCA9ICQoXCIjbWFwaWRcIik7XHJcbiAgICAgICAgdmFyIGxhdGl0dWRlID0gcGFyc2VGbG9hdCgkbWFwLmRhdGEoJ2xhdGl0dWRlJykucmVwbGFjZSgnLCcsICcuJykpO1xyXG4gICAgICAgIHZhciBsb25ndGl0dWRlID0gcGFyc2VGbG9hdCgkbWFwLmRhdGEoJ2xvbmd0aXR1ZGUnKS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICAgICAgdmFyIHpvb20gPSBwYXJzZUZsb2F0KCRtYXAuZGF0YSgnem9vbScpKTtcclxuICAgICAgICB2YXIgbWFwID0gTC5tYXAoJ21hcGlkJykuc2V0VmlldyhbbGF0aXR1ZGUsIGxvbmd0aXR1ZGVdLCB6b29tKTsgXHJcbiAgICAgICAgTC50aWxlTGF5ZXIoJ2h0dHA6Ly97c30udGlsZS5vc20ub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcclxuICAgICAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly9vc20ub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG4gICAgICAgIEwubWFya2VyKFtsYXRpdHVkZSxsb25ndGl0dWRlXSkuYWRkVG8obWFwKTtcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXA7IiwidmFyIHNsaWRlckJhbmVyID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNsaWRlciA9ICQoJy5zbGlkZXItYmFuZXInKTtcclxuICAgICAgICBpZiAoIXNsaWRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlci5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICBzbWFydFNwZWVkOiAxMDAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlkZXJCYW5lcjsiLCJ2YXIgc2xpZGVyUGxheWxpc3QgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2xpZGVyID0gJCgnLnNsaWRlci1wbGF5bGlzdCcpO1xyXG4gICAgICAgIGlmICghc2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVyLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSA6IHtcclxuICAgICAgICAgICAgICAgIDAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAyNCA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlclBsYXlsaXN0OyIsInZhciBzbGlkZXJQcm9ncmFtcyA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzbGlkZXIgPSAkKCcucHJvZ3JhbS1zbGlkZXInKTtcclxuICAgICAgICBpZiAoIXNsaWRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlci5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVha3BvaW50IGZyb20gMCB1cFxyXG4gICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICA0ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlclByb2dyYW1zOyIsInZhciBjdXN0b21WaWRlbyA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB2aWRlb0VsID0gJCgnLnZpZGVvLWN1c3RvbScpO1xyXG4gICAgICAgIGlmICghdmlkZW9FbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBseXIuc2V0dXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZGVvLWN1c3RvbScpLCB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xzOlsncGxheS1sYXJnZScsICdwbGF5JywnbXV0ZScsICd2b2x1bWUnLCAnY2FwdGlvbnMnLCAnZnVsbHNjcmVlbiddXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGx5ci5zZXR1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12aWRlby1pZF0nKSwge1xyXG4gICAgICAgICAgICBjb250cm9sczpbJ3BsYXktbGFyZ2UnLCAncGxheScsJ211dGUnLCAndm9sdW1lJywgJ2NhcHRpb25zJywgJ2Z1bGxzY3JlZW4nXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXN0b21WaWRlbzsgIl19
