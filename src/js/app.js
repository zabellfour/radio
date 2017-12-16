// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import common from './modules/common';
import accordionActive from './modules/accordionActive';

//Sliders
import sliderPrograms from './modules/sliders/sliderPrograms';
import sliderPlaylist from './modules/sliders/sliderPlaylist';
import sliderBaner from './modules/sliders/sliderBaner';

//Forms
import customSelect from './modules/customSelect';

//maps 
import map from './modules/map';

(($) => {
    'use strict';
    // When DOM is ready
    $(() => {
        common.mobMenu();
        accordionActive.init();
        // Sliders init
        sliderPrograms.init();
        sliderPlaylist.init();
        sliderBaner.init();
        //Forms
        customSelect.init();
        map.init();
     

    });


})(jQuery);