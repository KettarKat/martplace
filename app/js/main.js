$(function(){
  $('.product__slider-items').slick({
    prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
  });

  $('.followers__slider-items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
  });
  
  $(".rate-star").rateYo({
    starWidth: "15px",
    ratedFill: "#ffc000",
    normalFill: "#fff",
    spacing: "3px",
    rating: 3.2,
    readOnly: true,
  });
  $('.icon-btn-list').on('click', function () {
    $('.favorites__item').addClass('list');
    $('.icon-btn-list').addClass('active');
    $('.icon-btn-large').removeClass('active');
  });
  $('.icon-btn-large').on('click', function(){
    $('.favorites__item').removeClass('list');
    $('.icon-btn-large').addClass('active');
    $('.icon-btn-list').removeClass('active');
  });
  $('input, select').styler();
  var mixer = mixitup('.release__products-inner');
  
});
