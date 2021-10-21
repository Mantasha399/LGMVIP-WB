$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoPlay:true,
    autoplayTimeout:1000,
    dots:true,
    items:1,
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
})
$('.owl-carousel').owlCarousel({
    items: 2,
    loop: true,
    video: true,
    lazyLoad: true
    
}); 
$('.slider-loz .owl-carousel').owlCarousel({
    loop: true,
        margin: 10,
        nav: true,
        items: 4,
        // nav: false,
        dots: false
    
})
$('#teams-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    items: 1,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});