$(document).ready(function(){
    $(".header-bar").click(function(){
     $(".navigation").slideToggle();
    });
       $('.owl-carousel').owlCarousel({
     items:2,
           loop:true,
    margin:30,
           autoplay: true,
    autoplaySpeed: 1000,
    nav:true,
    responsive: {
    0: {
    items: 1
    },
    600: {
    items: 2
    }
    }
    });
    });