var accordionActive = {
	init: function() {
		var accordion = $('#accordion');
		if (!accordion) {
			return;
		}
		$('.panel-heading a').click(function() {
			$('.panel-heading').removeClass('active');
			if(!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
				$(this).parents('.panel-heading').addClass('active');
		});
	}
};

export default accordionActive;