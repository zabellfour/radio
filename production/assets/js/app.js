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
            sec_1 = customClock.find('#sec_1 path'),
            sec_2 = customClock.find('#sec_2 path'),
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
                min12 = 0;
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
            drow(sec_1, sec1);
            drow(sec_2, sec2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxhY2NvcmRpb25BY3RpdmUuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxjbG9jay5qcyIsInNyY1xcanNcXG1vZHVsZXNcXGNvbW1vbi5qcyIsInNyY1xcanNcXG1vZHVsZXNcXGN1c3RvbVNlbGVjdC5qcyIsInNyY1xcanNcXG1vZHVsZXNcXG1hcC5qcyIsInNyY1xcanNcXG1vZHVsZXNcXHNsaWRlcnNcXHNsaWRlckJhbmVyLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcc2xpZGVyc1xcc2xpZGVyUGxheWxpc3QuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxzbGlkZXJzXFxzbGlkZXJQcm9ncmFtcy5qcyIsInNyY1xcanNcXG1vZHVsZXNcXHZpZGVvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUdBOzs7O0FBR0E7Ozs7OztBQUpBOzs7QUFSQTtBQWNBLENBQUMsVUFBQyxDQUFELEVBQU87QUFDSjtBQUNBOztBQUNBLE1BQUUsWUFBTTtBQUNKLHlCQUFPLE9BQVA7QUFDQSxrQ0FBZ0IsSUFBaEI7QUFDQTtBQUNBLGlDQUFlLElBQWY7QUFDQSxpQ0FBZSxJQUFmO0FBQ0EsOEJBQVksSUFBWjtBQUNBO0FBQ0EsK0JBQWEsSUFBYjtBQUNBLHNCQUFJLElBQUo7QUFDQSx3QkFBWSxJQUFaO0FBQ0E7QUFDQSx3QkFBWSxJQUFaO0FBRUgsS0FkRDtBQWlCSCxDQXBCRCxFQW9CRyxNQXBCSDs7QUFIQTs7O0FBTkE7QUFkQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQSxJQUFJLGtCQUFrQjtBQUNyQixPQUFNLGdCQUFXO0FBQ2hCLE1BQUksWUFBWSxFQUFFLFlBQUYsQ0FBaEI7QUFDQSxNQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNmO0FBQ0E7QUFDRCxJQUFFLGtCQUFGLEVBQXNCLEtBQXRCLENBQTRCLFlBQVc7QUFDdEMsS0FBRSxnQkFBRixFQUFvQixXQUFwQixDQUFnQyxRQUFoQztBQUNBLE9BQUcsQ0FBQyxFQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLFFBQWhCLEVBQTBCLElBQTFCLENBQStCLGlCQUEvQixFQUFrRCxRQUFsRCxDQUEyRCxJQUEzRCxDQUFKLEVBQ0MsRUFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixnQkFBaEIsRUFBa0MsUUFBbEMsQ0FBMkMsUUFBM0M7QUFDRCxHQUpEO0FBS0E7QUFYb0IsQ0FBdEI7O2tCQWNlLGU7Ozs7Ozs7O0FDZGYsSUFBSSxjQUFjO0FBQ2QsVUFBTSxnQkFBVztBQUNiLFlBQUksY0FBYyxFQUFFLG1CQUFGLENBQWxCO0FBQ0EsWUFBSSxDQUFDLFdBQUwsRUFBa0I7QUFDZDtBQUNIO0FBQ0QsWUFBSSxPQUFPLFlBQVksSUFBWixDQUFpQixZQUFqQixDQUFYO0FBQUEsWUFDSSxPQUFPLFlBQVksSUFBWixDQUFpQixZQUFqQixDQURYO0FBQUEsWUFFSSxNQUFNLFlBQVksSUFBWixDQUFpQixZQUFqQixDQUZWO0FBQUEsWUFHSSxRQUFRLFlBQVksSUFBWixDQUFpQixhQUFqQixDQUhaO0FBQUEsWUFJSSxRQUFRLFlBQVksSUFBWixDQUFpQixhQUFqQixDQUpaO0FBQUEsWUFLSSxRQUFRLFlBQVksSUFBWixDQUFpQixhQUFqQixDQUxaO0FBQUEsWUFNSSxRQUFRLFlBQVksSUFBWixDQUFpQixhQUFqQixDQU5aO0FBQUEsWUFPSSxPQUFPLFlBQVksSUFBWixDQUFpQixZQUFqQixDQVBYO0FBQUEsWUFRSSxPQUFPLFlBQVksSUFBWixDQUFpQixZQUFqQixDQVJYO0FBU0E7QUFDQSxZQUFJLGFBQWEsQ0FDYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELEVBQXlELEVBQXpELEVBQTZELEVBQTdELEVBQWlFLEVBQWpFLEVBQXFFLEVBQXJFLEVBQXlFLEVBQXpFLEVBQTZFLEVBQTdFLEVBQWlGLEVBQWpGLENBRGEsRUFFYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBRmEsRUFHYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCLEVBQS9CLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDLEVBQTJDLEVBQTNDLEVBQStDLEVBQS9DLEVBQW1ELEVBQW5ELEVBQXVELEVBQXZELEVBQTJELEVBQTNELEVBQStELEVBQS9ELENBSGEsRUFJYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDLEVBQTBDLEVBQTFDLEVBQThDLEVBQTlDLEVBQWtELEVBQWxELEVBQXNELEVBQXRELEVBQTBELEVBQTFELENBSmEsRUFLYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDLEVBQTBDLEVBQTFDLEVBQThDLEVBQTlDLENBTGEsRUFNYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLEVBQTRDLEVBQTVDLEVBQWdELEVBQWhELEVBQW9ELENBQXBELEVBQXVELEVBQXZELEVBQTJELEVBQTNELEVBQStELEVBQS9ELEVBQW1FLEVBQW5FLENBTmEsRUFPYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLEVBQTRDLEVBQTVDLEVBQWdELEVBQWhELEVBQW9ELENBQXBELEVBQXVELEVBQXZELEVBQTJELEVBQTNELEVBQStELEVBQS9ELEVBQW1FLEVBQW5FLEVBQXVFLEVBQXZFLEVBQTJFLEVBQTNFLENBUGEsRUFRYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLENBUmEsRUFTYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELEVBQXlELEVBQXpELEVBQTZELEVBQTdELEVBQWlFLEVBQWpFLEVBQXFFLEVBQXJFLEVBQXlFLEVBQXpFLEVBQTZFLEVBQTdFLEVBQWlGLEVBQWpGLEVBQXFGLEVBQXJGLEVBQXlGLEVBQXpGLEVBQTZGLEVBQTdGLENBVGEsRUFVYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8s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QUFDSDtBQUNELGFBQUssS0FBTCxDQUFXLFNBQVMsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBWCxFQUF1RDtBQUNuRCxzQkFBUyxDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXNCLE1BQXRCLEVBQThCLFFBQTlCLEVBQXdDLFVBQXhDLEVBQW9ELFlBQXBEO0FBRDBDLFNBQXZEO0FBR0EsYUFBSyxLQUFMLENBQVcsU0FBUyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBWCxFQUF5RDtBQUNyRCxzQkFBUyxDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXNCLE1BQXRCLEVBQThCLFFBQTlCLEVBQXdDLFVBQXhDLEVBQW9ELFlBQXBEO0FBRDRDLFNBQXpEO0FBSUg7QUFiYSxDQUFsQjs7a0JBZ0JlLFciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXHJcbi8vXHJcbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cclxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXHJcblxyXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vbW9kdWxlcy9jb21tb24nO1xyXG5pbXBvcnQgYWNjb3JkaW9uQWN0aXZlIGZyb20gJy4vbW9kdWxlcy9hY2NvcmRpb25BY3RpdmUnO1xyXG5pbXBvcnQgY3VzdG9tQ2xvY2sgZnJvbSAnLi9tb2R1bGVzL2Nsb2NrJztcclxuXHJcbi8vU2xpZGVyc1xyXG5pbXBvcnQgc2xpZGVyUHJvZ3JhbXMgZnJvbSAnLi9tb2R1bGVzL3NsaWRlcnMvc2xpZGVyUHJvZ3JhbXMnO1xyXG5pbXBvcnQgc2xpZGVyUGxheWxpc3QgZnJvbSAnLi9tb2R1bGVzL3NsaWRlcnMvc2xpZGVyUGxheWxpc3QnO1xyXG5pbXBvcnQgc2xpZGVyQmFuZXIgZnJvbSAnLi9tb2R1bGVzL3NsaWRlcnMvc2xpZGVyQmFuZXInO1xyXG5cclxuLy9Gb3Jtc1xyXG5pbXBvcnQgY3VzdG9tU2VsZWN0IGZyb20gJy4vbW9kdWxlcy9jdXN0b21TZWxlY3QnO1xyXG5cclxuLy9NYXBzIFxyXG5pbXBvcnQgbWFwIGZyb20gJy4vbW9kdWxlcy9tYXAnO1xyXG5cclxuLy9DdXN0b20gVmlkZW9cclxuaW1wb3J0IGN1c3RvbVZpZGVvIGZyb20gJy4vbW9kdWxlcy92aWRlbyc7XHJcblxyXG4oKCQpID0+IHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIC8vIFdoZW4gRE9NIGlzIHJlYWR5XHJcbiAgICAkKCgpID0+IHtcclxuICAgICAgICBjb21tb24ubW9iTWVudSgpO1xyXG4gICAgICAgIGFjY29yZGlvbkFjdGl2ZS5pbml0KCk7XHJcbiAgICAgICAgLy8gU2xpZGVycyBpbml0XHJcbiAgICAgICAgc2xpZGVyUHJvZ3JhbXMuaW5pdCgpO1xyXG4gICAgICAgIHNsaWRlclBsYXlsaXN0LmluaXQoKTtcclxuICAgICAgICBzbGlkZXJCYW5lci5pbml0KCk7XHJcbiAgICAgICAgLy9Gb3Jtc1xyXG4gICAgICAgIGN1c3RvbVNlbGVjdC5pbml0KCk7XHJcbiAgICAgICAgbWFwLmluaXQoKTtcclxuICAgICAgICBjdXN0b21WaWRlby5pbml0KCk7XHJcbiAgICAgICAgLy9jdXN0b20tY2xvY2tcclxuICAgICAgICBjdXN0b21DbG9jay5pbml0KCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxufSkoalF1ZXJ5KTsiLCJ2YXIgYWNjb3JkaW9uQWN0aXZlID0ge1xyXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGFjY29yZGlvbiA9ICQoJyNhY2NvcmRpb24nKTtcclxuXHRcdGlmICghYWNjb3JkaW9uKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdCQoJy5wYW5lbC1oZWFkaW5nIGEnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLnBhbmVsLWhlYWRpbmcnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdGlmKCEkKHRoaXMpLmNsb3Nlc3QoJy5wYW5lbCcpLmZpbmQoJy5wYW5lbC1jb2xsYXBzZScpLmhhc0NsYXNzKCdpbicpKVxyXG5cdFx0XHRcdCQodGhpcykucGFyZW50cygnLnBhbmVsLWhlYWRpbmcnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvcmRpb25BY3RpdmU7IiwidmFyIGN1c3RvbUNsb2NrID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGN1c3RvbUNsb2NrID0gJCgnI2hlYWRlci1jbG9jayBzdmcnKTtcclxuICAgICAgICBpZiAoIWN1c3RvbUNsb2NrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRvdFMgPSBjdXN0b21DbG9jay5maW5kKCcjZG90cyBwYXRoJyksXHJcbiAgICAgICAgICAgIGRvdEggPSBjdXN0b21DbG9jay5maW5kKCcjZG90aCBwYXRoJyksXHJcbiAgICAgICAgICAgIHNlcCA9IGN1c3RvbUNsb2NrLmZpbmQoJyNzZXBhcmF0b3InKSxcclxuICAgICAgICAgICAgc2VjXzEgPSBjdXN0b21DbG9jay5maW5kKCcjc2VjXzEgcGF0aCcpLFxyXG4gICAgICAgICAgICBzZWNfMiA9IGN1c3RvbUNsb2NrLmZpbmQoJyNzZWNfMiBwYXRoJyksXHJcbiAgICAgICAgICAgIG1pbl8xID0gY3VzdG9tQ2xvY2suZmluZCgnI21pbl8xIHBhdGgnKSxcclxuICAgICAgICAgICAgbWluXzIgPSBjdXN0b21DbG9jay5maW5kKCcjbWluXzIgcGF0aCcpLFxyXG4gICAgICAgICAgICBocl8xID0gY3VzdG9tQ2xvY2suZmluZCgnI2hyXzEgcGF0aCcpLFxyXG4gICAgICAgICAgICBocl8yID0gY3VzdG9tQ2xvY2suZmluZCgnI2hyXzIgcGF0aCcpO1xyXG4gICAgICAgIC8vY29kZXMgb2YgZGlnaXRzXHJcbiAgICAgICAgdmFyIGRhdGFOdW1lcnMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCAxNCwgMjEsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAyNywgMjAsIDEzXSxcclxuICAgICAgICAgICAgWzAsIDEsIDIsIDMsIDQsIDUsIDZdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMiwgMywgNiwgNywgMTAsIDEzLCAxNCwgMTcsIDIwLCAyMSwgMjQsIDI3LCAyOCwgMzIsIDMzLCAzNF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAyLCA0LCA1LCA2LCA3LCAxMCwgMTMsIDE0LCAxNywgMjAsIDIxLCAyNCwgMjcsIDI4LCAzNF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCAxMCwgMTcsIDI0LCAyOCwgMjksIDMwLCAzMV0sXHJcbiAgICAgICAgICAgIFswLCA0LCA1LCA2LCA3LCAxNCwgMjEsIDI4LCAyOSwgMzAsIDMxLCAyNCwgMTcsIDEwLCAzLCAxMywgMjAsIDI3LCAzNF0sXHJcbiAgICAgICAgICAgIFswLCA0LCA1LCA2LCA3LCAxNCwgMjEsIDI4LCAyOSwgMzAsIDMxLCAyNCwgMTcsIDEwLCAzLCAxMywgMjAsIDI3LCAzNCwgMzMsIDMyXSxcclxuICAgICAgICAgICAgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDE0LCAyMSwgMjhdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgMTQsIDIxLCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAyOCwgMjAsIDEzLCAxMCwgMTcsIDI0LCAyN10sXHJcbiAgICAgICAgICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCAxNCwgMjEsIDI4LCAyOSwgMzAsIDMxLCAzNSwgMzYsIDI3LCAyMCwgMTMsIDEwLCAxNywgMjQsIDM0XVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGRvdEguY3NzKFwiZmlsbC1vcGFjaXR5XCIsIFwiMVwiKTtcclxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoZG90UykuY3NzKFwiZmlsbC1vcGFjaXR5XCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpLFxyXG4gICAgICAgICAgICAgICAgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpLFxyXG4gICAgICAgICAgICAgICAgaG91cnMgPSBkYXRlLmdldEhvdXJzKCksXHJcbiAgICAgICAgICAgICAgICBzZWMxID0gMCxcclxuICAgICAgICAgICAgICAgIHNlYzIgPSAwLFxyXG4gICAgICAgICAgICAgICAgbWluMSA9IDAsXHJcbiAgICAgICAgICAgICAgICBtaW4yID0gMCxcclxuICAgICAgICAgICAgICAgIGhyMSA9IDAsXHJcbiAgICAgICAgICAgICAgICBocjIgPSAwO1xyXG4gICAgICAgICAgICBpZiAoc2Vjb25kcyA8PSA5KSB7XHJcbiAgICAgICAgICAgICAgICBzZWMxID0gc2Vjb25kcztcclxuICAgICAgICAgICAgICAgIHNlYzIgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VjMSA9IChzZWNvbmRzICsgJycpWzFdICogMTtcclxuICAgICAgICAgICAgICAgIHNlYzIgPSAoc2Vjb25kcyArICcnKVswXSAqIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPD0gOSkge1xyXG4gICAgICAgICAgICAgICAgbWluMSA9IG1pbnV0ZXM7XHJcbiAgICAgICAgICAgICAgICBtaW4xMiA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtaW4xID0gKG1pbnV0ZXMgKyAnJylbMV0gKiAxO1xyXG4gICAgICAgICAgICAgICAgbWluMiA9IChtaW51dGVzICsgJycpWzBdICogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaG91cnMgPD0gOSkge1xyXG4gICAgICAgICAgICAgICAgaHIxID0gaG91cnM7XHJcbiAgICAgICAgICAgICAgICBocjIgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHIxID0gKGhvdXJzICsgJycpWzFdICogMTtcclxuICAgICAgICAgICAgICAgIGhyMiA9IChob3VycyArICcnKVswXSAqIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gc2Vjb25kczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAkKGRvdFNbaV0pLmNzcyhcImZpbGwtb3BhY2l0eVwiLCBcIjFcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXAuY3NzKFwiZmlsbC1vcGFjaXR5XCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VwLmNzcyhcImZpbGwtb3BhY2l0eVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHJvdyhzZWNfMSwgc2VjMSk7XHJcbiAgICAgICAgICAgIGRyb3coc2VjXzIsIHNlYzIpO1xyXG4gICAgICAgICAgICBkcm93KG1pbl8xLCBtaW4xKTtcclxuICAgICAgICAgICAgZHJvdyhtaW5fMiwgbWluMik7XHJcbiAgICAgICAgICAgIGRyb3coaHJfMSwgaHIxKTtcclxuICAgICAgICAgICAgZHJvdyhocl8yLCBocjIpO1xyXG5cclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZHJvdyhudW1iZXJFbCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgJChudW1iZXJFbCkuY3NzKFwiZmlsbC1vcGFjaXR5XCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gOTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaiA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8PSBkYXRhTnVtZXJzW2pdLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQobnVtYmVyRWxbZGF0YU51bWVyc1tqXVtuXV0pLmNzcyhcImZpbGwtb3BhY2l0eVwiLCBcIjFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tQ2xvY2s7IiwiLy8gVGhpcyBpcyBhbiBleGFtcGxlcyBvZiBzaW1wbGUgZXhwb3J0LlxyXG4vL1xyXG4vLyBZb3UgY2FuIHJlbW92ZSBvciBhZGQgeW91ciBvd24gZnVuY3Rpb24gaW4gdGhpcyBmaWxlLlxyXG5cclxudmFyIGNvbW1vbiA9IHtcclxuICAgIG1vYk1lbnU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkbWVudU9wZW5lciA9ICQoJy5tZW51LW9wZW5lcicpLFxyXG4gICAgICAgICAgICAkYm9keSA9ICQoJ2JvZHknKSxcclxuICAgICAgICAgICAgJGZvcm1FbCA9ICQoJy5oZWFkZXItdG9wIC5zZWFyY2gtZm9ybScpLFxyXG4gICAgICAgICAgICAkbG9nb0VsID0gJCgnLmxvZ28tZnVsbCcpO1xyXG4gICAgICAgIGlmICghJG1lbnVPcGVuZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJG1lbnVPcGVuZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICRib2R5LnRvZ2dsZUNsYXNzKCdvcGVuLW1lbnUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkZm9ybUVsLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA0ODApIHtcclxuICAgICAgICAgICAgICAgICRmb3JtRWwuYWRkQ2xhc3MoJ29wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgJGxvZ29FbC5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDQ4MCkge1xyXG4gICAgICAgICAgICAgICAgJGZvcm1FbC5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAkbG9nb0VsLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51T3BlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2Nykge1xyXG4gICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW4tbWVudScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gc3ViTWVudU9wZW4oKXtcclxuICAgICAgICAgICAgJCgnLmhhcy1kcm9wZG93biA+IC5kcm9wLW9wZW5lcicpLm9mZigpO1xyXG4gICAgICAgICAgICAkKCcuaGFzLWRyb3Bkb3duID4gLmRyb3Atb3BlbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5kcm9wLWRvd24nKS5zbGlkZVRvZ2dsZSg2MDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViTWVudU9wZW4oKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tb247IiwidmFyIGN1c3RvbVNlbGVjdCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtID0gJCgnLnNlbGVjdHBpY2tlcicpO1xyXG4gICAgICAgIGlmICghZWxlbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW0uc2VsZWN0cGlja2VyKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXN0b21TZWxlY3Q7IiwidmFyIG1hcCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkbWFwID0gJChcIiNtYXBpZFwiKTtcclxuICAgICAgICB2YXIgbGF0aXR1ZGUgPSBwYXJzZUZsb2F0KCRtYXAuZGF0YSgnbGF0aXR1ZGUnKS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICAgICAgdmFyIGxvbmd0aXR1ZGUgPSBwYXJzZUZsb2F0KCRtYXAuZGF0YSgnbG9uZ3RpdHVkZScpLnJlcGxhY2UoJywnLCAnLicpKTtcclxuICAgICAgICB2YXIgem9vbSA9IHBhcnNlRmxvYXQoJG1hcC5kYXRhKCd6b29tJykpO1xyXG4gICAgICAgIHZhciBtYXAgPSBMLm1hcCgnbWFwaWQnKS5zZXRWaWV3KFtsYXRpdHVkZSwgbG9uZ3RpdHVkZV0sIHpvb20pOyBcclxuICAgICAgICBMLnRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9zbS5vcmcve3p9L3t4fS97eX0ucG5nJywge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29zbS5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgTC5tYXJrZXIoW2xhdGl0dWRlLGxvbmd0aXR1ZGVdKS5hZGRUbyhtYXApO1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcDsiLCJ2YXIgc2xpZGVyQmFuZXIgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2xpZGVyID0gJCgnLnNsaWRlci1iYW5lcicpO1xyXG4gICAgICAgIGlmICghc2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVyLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDEwMDBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlckJhbmVyOyIsInZhciBzbGlkZXJQbGF5bGlzdCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzbGlkZXIgPSAkKCcuc2xpZGVyLXBsYXlsaXN0Jyk7XHJcbiAgICAgICAgaWYgKCFzbGlkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMDI0IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyUGxheWxpc3Q7IiwidmFyIHNsaWRlclByb2dyYW1zID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNsaWRlciA9ICQoJy5wcm9ncmFtLXNsaWRlcicpO1xyXG4gICAgICAgIGlmICghc2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVyLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrcG9pbnQgZnJvbSAwIHVwXHJcbiAgICAgICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyUHJvZ3JhbXM7IiwidmFyIGN1c3RvbVZpZGVvID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHZpZGVvRWwgPSAkKCcudmlkZW8tY3VzdG9tJyk7XHJcbiAgICAgICAgaWYgKCF2aWRlb0VsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGx5ci5zZXR1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlkZW8tY3VzdG9tJyksIHtcclxuICAgICAgICAgICAgY29udHJvbHM6WydwbGF5LWxhcmdlJywgJ3BsYXknLCdtdXRlJywgJ3ZvbHVtZScsICdjYXB0aW9ucycsICdmdWxsc2NyZWVuJ11cclxuICAgICAgICB9KTtcclxuICAgICAgICBwbHlyLnNldHVwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZpZGVvLWlkXScpLCB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xzOlsncGxheS1sYXJnZScsICdwbGF5JywnbXV0ZScsICd2b2x1bWUnLCAnY2FwdGlvbnMnLCAnZnVsbHNjcmVlbiddXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbVZpZGVvOyAiXX0=
