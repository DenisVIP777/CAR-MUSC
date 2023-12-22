/*const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
var chislo = 3;
if(mainElementWidth <= 767){
	chislo = 3 - 2;
}*/

jQuery('document').ready(function(){
	
	
	$('.slider').slick({
		slidesToShow: 3,
		autoplay:true,
		autoplaySpeed:3000,
		pauseOnFocus:true,
		pauseOnHover:false,
		responsive: [
		    {
		      breakpoint: 1100,
		      settings: {
		        arrows: false,
		      }
		    },
		    {
		      breakpoint: 850,
		      settings: {
		        slidesToShow: 2,
		        arrows: false,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        arrows: false,
		      }
		    },
		]
	});
	
	$('.slider_2').slick({
		slidesToShow:1,
		autoplay:true,
		autoplaySpeed:3000,
		pauseOnFocus:true,
		pauseOnHover:false,
		responsive: [
		    {
		      breakpoint: 600,
		      settings: {
		        arrows: false,
		      }
		    }
		]
	});
});