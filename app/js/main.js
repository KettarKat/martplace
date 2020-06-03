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
    rating: 5,
    starWidth: "15px",
    ratedFill: "#ffc000",
    normalFill: "#fff",
    spacing: "3px",
  });
   
  
})
