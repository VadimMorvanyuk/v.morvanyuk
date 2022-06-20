jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	
	jQuery(".fancybox").fancybox();
	
	let carousel = jQuery('#carousel-banner');
		
	carousel.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 5000,
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
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			767:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			991:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			1099:{
				items: 1,
				dots: true,
				mouseDrag: true,
				nav: true,
				autoplay: false
			},
			
		}
	});


	let carousel_clients = jQuery('#carousel_clients');
		
	carousel_clients.owlCarousel({
		items: 4,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		smartSpeed: 2000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: [''],
		dots: true,
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
				autoplay: false,
				smartSpeed: 1000
			},
			479:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
				nav: false
			},
			767:{
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
				nav: false
			},
			991:{
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000,
				nav: false
			},
			1099:{
				items: 4,
				dots: true,
				mouseDrag: true,
				nav: false
			},
			1400:{
				items: 4,
				dots: true,
				mouseDrag: true,
				nav: true
			}
			
		}
	});
	
});

'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});

jQuery(document).ready(function () {
	jQuery(".responsive-menu").click(function () {
		jQuery('.fas').toggleClass("active");
		jQuery(".sideNav").toggleClass("active");
		jQuery("body").toggleClass("lock");
	});
});

