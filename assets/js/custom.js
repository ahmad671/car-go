setTimeout(function(){
    $('.loader_bg').fadeToggle();
  }, 500);
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("d-navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}	

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});

// Popup Video
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 100,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});

// Client Area Owl Carousel
$("#owl-client").owlCarousel({
	pagination : false,
	center: true,
	loop:true,
	dots:false,
	margin:0,
	nav:false,
	autoplay:true,
	autoplayTimeout:2000,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
  });
		// Nice Select JS
		$('select').niceSelect();
	
		// Testimonials Slider JS
		$('.testimonial-slider').owlCarousel({
			items:1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			autoplay: true,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			animateOut: "slideOutDown",
		});	
	// Skill JS
	jQuery('.skill-bar').each(function() {
		jQuery(this).find('.progress-content').animate({
		width:jQuery(this).attr('data-percentage')
		},2000);
		
		jQuery(this).find('.progress-number-mark').animate(
		{left:jQuery(this).attr('data-percentage')},
		{
			duration: 2000,
			step: function(now, fx) {
			var data = Math.round(now);
			jQuery(this).find('.percent').html(data + '%');
			}
		});  
	});
