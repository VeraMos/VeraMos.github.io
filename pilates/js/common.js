$(document).ready(function(){

  $('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');

});

  $('.popup-btn').on('click', function(e) {
    e.preventDefault();
    $('.popup').fadeIn();
  });

  $('.popup-close').on('click', function(e) {
    e.preventDefault();
    $('.popup').fadeOut();
  });

  $('.reviews-slider').slick({
    //dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-left"></button>',
    nextArrow: '<button class="prev-right"></button>',
    responsive: [
    {
      breakpoint: 1200,
      settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       prevArrow: '<button class="prev-left"></button>',
       nextArrow: '<button class="prev-right"></button>'
     }
    },
   {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>'
        }
     },
     {
      breakpoint: 576,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false
        }
     }
  ]
});


});




