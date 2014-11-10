/* Main JS execution */

$(document).ready(function() {

	/* Animate orbit list */
	/* List orbits at beginning and when mouse is inactive for 5 seconds */
	/* List pauses orbit when mouse moves */
	orbit_speed = 0;
	$('.primary_content .orbit_list').animate({
		/* etc */
	}, {
		step: function(now, fx) {
			var orbit_speed = 1;
			if (orbit_speed > 1) orbit_speed -= 1;
			$('.primary_content h2').click(function() {
				orbit_speed += 8;
				if (orbit_speed >= 10) orbit_speed = 10;
			});



			$('.primary_content h2').after('<div>' + orbit_speed + '</div>');
		}
	});

	/* Resume area */
	$('.primary_content .orbit_list #li_resume').click(function() {
		$('.resume_area').animate({
			width: 'toggle'
		}, 200, function() {
			/* etc */
		});
	});

});