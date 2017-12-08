// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var common = {
  headerSlider: function() {
    var $slEl = $('.freq-slider');
    if (!$slEl.length) {
      return false;
    }
    $slEl.owlCarousel();
  }
};

export default common;