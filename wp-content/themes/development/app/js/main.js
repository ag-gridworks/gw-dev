$( document ).ready(function() {

	/////////////////// Carousel Init ///////////////////

	$('.owl-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		autoplay:false,
		autoplayTimeout: 4000,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	/////////////////// Google Font Imports ///////////////////

	WebFontConfig = {
		google: { families: [ 'Lato:300,400,700,900', 'Nunito:300,400,700,900' ] }
	};
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();


	/////////////////// Css Hamburg Init ///////////////////

	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

	var hamburgers = document.querySelectorAll(".hamburger");
	if (hamburgers.length > 0) {
		forEach(hamburgers, function(hamburger) {
			hamburger.addEventListener("click", function() {
				this.classList.toggle("is-active");
				$(".overlay-navigation").fadeToggle(300, function() {

				});
			}, false);
		});
	}

	/////////////////// Go To Div ///////////////////

	$(".navbar-option").click(function() {
		$(".hamburger").trigger('click');
		var div = $(this).find('a').attr('href');
		console.log(div);
		$('html, body').animate({
			scrollTop: $(div).offset().top
		}, 1500);
	});

});