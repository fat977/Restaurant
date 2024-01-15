$(document).ready(function () {
    $(".chefs").owlCarousel({
        loop: true,
        margin: 25,
       
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
      
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    });

    $(".testimonial").owlCarousel({
       
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop: true
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                loop:false
            }
        }
    });

});