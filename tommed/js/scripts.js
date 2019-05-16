$(function() {
    $('.header__menu-toggle').on('click', function(e) {
      e.preventDefault;
      $(this).toggleClass('header__menu-toggle--active');
      $('.header__menu-wrapper').toggleClass('header__menu-wrapper--active');
      $('.header__menu-item').toggleClass('header__menu-item--active');
      $('.header__menu').toggleClass('header__menu--active');
      
});

     $('.special-offers__slider').slick({
    //dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-left"></button>',
    nextArrow: '<button class="prev-right"></button>',
    responsive: [
    {
      breakpoint: 1200,
      settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
       prevArrow: '<button class="prev-left"></button>',
       nextArrow: '<button class="prev-right"></button>'
     }
    },
   {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>'
        }
     },
     {
      breakpoint: 576,
      settings: {
        //dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>'
        }
     },
     {
     breakpoint: 320,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: false,
        nextArrow: false
        }
     }
  ]
});

     $('.sertificate-slider').slick({
    //dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-left"></button>',
    nextArrow: '<button class="prev-right"></button>',
    responsive: [
    {
      breakpoint: 1200,
      settings: {
       slidesToShow: 4,
       slidesToScroll: 1,
       prevArrow: '<button class="prev-left"></button>',
       nextArrow: '<button class="prev-right"></button>'
     }
    },
    {
      breakpoint: 1070,
      settings: {
       slidesToShow: 4,
       slidesToScroll: 1,
       prevArrow: '<button class="prev-left"></button>',
       nextArrow: '<button class="prev-right"></button>'
     }
    },
    {
      breakpoint: 992,
      settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
       prevArrow: '<button class="prev-left"></button>',
       nextArrow: '<button class="prev-right"></button>'
     }
    },
   {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>'
        }
     },
     {
      breakpoint: 576,
      settings: {
        //dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>'
        }
     },
     {
      breakpoint: 400,
      settings: {
        //dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>'
        }
     }
  ]
});

});