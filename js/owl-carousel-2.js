
$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    center:true,
    nav:true,
    navText:[
        '<i class="fa-solid fa-angle-left bg-angle-icon"></i>',

        '<i class="fa-solid fa-angle-right bg-angle-icon"></i>',
    ],

    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            
        },
        1000:{
            items:3,
           
        }
    }
})

})