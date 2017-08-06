$( document ).ready(function() {
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
});