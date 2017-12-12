// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import common from './modules/common';

//Sliders
import sliderPrograms from './modules/sliders/sliderPrograms';
import sliderPlaylist from './modules/sliders/sliderPlaylist';
import sliderBaner from './modules/sliders/sliderBaner';

(($) => {
    'use strict';
    // When DOM is ready
    $(() => {
        common.mobMenu();
        // Sliders init
        sliderPrograms.init();
        sliderPlaylist.init();
        sliderBaner.init();
    });


})(jQuery);