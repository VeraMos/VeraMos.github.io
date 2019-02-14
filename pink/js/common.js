$(document).ready(function(){

  //$('.main-nav__toggle').on('click', function(e) {
  //e.preventDefault();
  //$(this).toggleClass('menu-btn_active');
  //$('.main-nav').fadeIn();

//});

  $('.main-nav__toggle').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('main-nav__toggle--active');
  $('.main-nav__wrapper').toggleClass('main-nav__wrapper--active');
  $('.page-header').toggleClass('page-header-active');
});

  var name = $('input[name=name]');
  var surname = $('input[name=surname]');
  var email = $('input[name=email]');

  $('.contest__btn').on('click', function(e) {
    e.preventDefault();
    if (name.val() && surname.val() && email.val()) {
    $('.modal__success').fadeIn();
    } else {
    $('.modal__error').fadeIn();
}
  });


  $('.modal__button').on('click', function(e) {
    e.preventDefault();
    $('.modal__success').fadeOut();
    $('.modal__error').fadeOut();
  });

$('.slider-rev').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
    //prevArrow: '<button class="prev-left"></button>',
    //nextArrow: '<button class="prev-right"></button>',
});

});