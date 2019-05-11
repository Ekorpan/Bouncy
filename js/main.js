'use strict';

(function($){
	$(document).ready(function() {
		// isotope
		isoImage();

		function isoImage() {


			$('.blocks').isotope({
				itemSelector: '.blocks__img',
				percentPosition: true,
				masonry: {
					columnWidth: '.sizer',
					gutter: 10
				}
			});

			$('.filters').on('click', 'li', function () {
				var val = $(this).data('filter');
				$('.blocks').isotope({filter: val});
			});

		}

		$('.slider').slick({
			arrows: false,
			dots: true
		});

		
	});
})(jQuery);

function initMap() {
	var coords, map, marker, content, info;


	coords = {lat: 50.442408, lng: 30.519655};

	map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 14, 
			center: coords
		}
		);
	info = new google.maps.InfoWindow({
		content: content
	});
	marker = new google.maps.Marker({
		position: coords, 
		map: map,
		icon: 'images/marker.png',
		draggable:true
	});

	marker.addListener('click', function() {
		info.open(map, marker);
	});

}
