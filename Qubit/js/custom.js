jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	jQuery('.link-item').click(function(){
		jQuery(this).addClass('active');
		jQuery('.link-item').not(this).removeClass('active');
	})
	
	
	
	let carousel = jQuery('#brands');
		
	carousel.owlCarousel({
		items: 8,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 2,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			479:{
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			767:{
				items: 5,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			991:{
				items: 6,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1099:{
				items: 8,
				dots: true,
				mouseDrag: true,
				nav: true,
				autoplay: true
			},
			
		}
	});


	let carousel_clients = jQuery('#carousel-brands');
		
	carousel_clients.owlCarousel({
		items: 3,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		smartSpeed: 2000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['<div class="icon"><i class="fa fa-solid fa-chevron-left"></i></div>', '<div class="icon"><i class="fa fa-solid fa-chevron-right"></i></div>'],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
				nav: true
			},
			767:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
				nav: true
			},
			991:{
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
				nav: true
			},
			1099:{
				items: 3,
				dots: true,
				mouseDrag: true,
				nav: true
			},
			1400:{
				items: 3,
				dots: true,
				mouseDrag: true,
				nav: true
			}
			
		}
	});
	
});
jQuery(document).ready(function () {
	jQuery(".responsive-menu").click(function () {
		jQuery(".sideNav").toggleClass("active");
		jQuery("body").toggleClass("lock");
	});
})

