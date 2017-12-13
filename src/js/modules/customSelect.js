var customSelect = {
    init: function() {
        var elem = $('.selectpicker');
        if (!elem) {
            return;
        }
        elem.selectpicker();
    }
};

export default customSelect;