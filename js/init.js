
$( document ).ready(function() {

	var $body = $('body');
    
 		// SCROLL TO SECTION
		//===================================
		
		// var home_link = $('nav-link.home a').focus();

		// $('a[href*=#]:not([href=#])').click(function() {
		// 	$(".nav-link a").removeClass('focused');
		// 	$(this).addClass('focused');
		// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		// 	  	var target = $(this.hash);
		// 	  	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		// 	  	if (target.length) {
		// 	   	$('html,body').animate({
		// 	      	scrollTop: target.offset().top - 70
		// 	    	}, 800);
		// 	   	return false;
		// 	  	}
		// 	}
		// });


		$.scrollIt({
			topOffset: -70
		});

		// TOP NAV
		//===================================
		var body = $('body'), 
			win = $(window),
			win_w = win.width(),	
			tablet_w = 1080,
			mobile_w = 700,
			nav = $('.header .nav'),
			menu_icon = $('.nav-toggle__menu'),
			close_icon = $('.nav-toggle__close'),
			nav_vis = false;

			$('.nav-toggle').click(function(){
			navToggle();
			return false;
		});

		function navToggle(){
			if(nav_vis){
				nav_vis = false;
				navHide();
			}else{
				nav_vis = true;
				navShow();
			}
		}

		function navShow(){
			nav.fadeIn();
			menu_icon.fadeOut();
			close_icon.fadeIn();
		}

		function navHide(){
			nav.fadeOut();
			close_icon.fadeOut();
			menu_icon.fadeIn();
		}

		// RESIZE
		//===================================
		win.resize(function(event) {
			win_w = win.width()

			check_mobile()
		});

		function check_mobile(){
			
		}

			//$('.video-bg').fitVids();



 			// LIST BOX
 			//===================================
 			// var list_box_items = $('.list-box .item');

 			// $('.list-box .item h2.trigger').click(function(event) {
 			// 	$(this).next().slideToggle();
 			// 	$('.list-box .item .body').not($(this).next()).slideUp();
 			// });

 			// CYCLE GALLERY
 			//===================================
 			// var	cycle_items = $('.cycle-gallery li'),
 			// 		cycle_total = cycle_items.length,
 			// 		cycle_current = 0, 
 			// 		cycle_last = 0;

 			// cycle_items.each(function(index, el) {
 			// 	$(this).addClass('index-'+ index).hide();
 			// });
 			// $('.cycle-gallery .index-0').show();

 			// function nextCycle(){
 				
 			// 	cycle_last = cycle_current;
 			// 	if(cycle_current == cycle_total - 1){
 			// 		cycle_current = 0;
 			// 	}else{
 			// 		cycle_current++;
 			// 	}

 			// 	fadeCycle();
 			// }

 			// function fadeCycle(){
 			// 	$('.cycle-gallery .index-' + cycle_current).fadeIn(200);
 			// 	$('.cycle-gallery .index-' + cycle_last).fadeOut(200);
 			// }

 			//	setInterval(nextCycle, 1000);




 			// MASONRY!!!
 			//===================================
			// var masonry_container = $('.node-image-gallery .field-name-field-other-images');
			
			// masonry_container.imagesLoaded(function(){
			// 	masonry_container.masonry({
			// 	  itemSelector: '.field-item'
			// 	});
			// });


			// SCROLL MAGIC
 			//===================================
			// 	var onCenterController = new ScrollMagic.Controller();
			// 	var onEnterController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});
			// 	var onLeaveController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});

			// 	var logo_main = new ScrollMagic.Scene({triggerElement: "#header", duration: "100%"})
			// .setTween("#header .inner", {'top': '80%', ease: Linear.easeNone})
			// .addTo(onLeaveController);

			// var about = new ScrollMagic.Scene({triggerElement: "#about", duration: "200%"})
			// .setTween("#about", {'background-position': '50% 150%', ease: Linear.easeNone})
			// .addTo(onEnterController);

			// var benefits = new ScrollMagic.Scene({triggerElement: "#benefits", duration: "200%"})
			// .setTween("#benefits", {'background-position': '50% 150%', ease: Linear.easeNone})
			// .addTo(onEnterController);

			// var team = new ScrollMagic.Scene({triggerElement: "#team", duration: "200%"})
			// .setTween("#team", {'background-position': '50% 150%', ease: Linear.easeNone})
			// .addTo(onEnterController);

	

			// var contact = new ScrollMagic.Scene({triggerElement: "#contact", duration: "200%"})
			// .setTween("#contact", {'background-position': '50% 150%', ease: Linear.easeNone})
			// .addTo(onEnterController);

});

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});

