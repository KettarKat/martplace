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
  $('.popular-products-btn').on('click', function() {    
    $('.popular-products-btn').addClass('.active-btn');
    $('.new-products-btn').removeClass('.active-btn');
  });
  $('.new-products-btn').on('click', function() {    
    $('.new-products-btn').addClass('.active-btn');
    $('.popular-products-btn').removeClass('.active-btn');
  });
  $(".new-products__aside-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 500,
    from: 30,
    to: 300,
    prefix: "$"
  });
  $('.blog__aside-tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.blog__aside-tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.blog__aside-tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });
    $('.single-product__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });
    
  $('input, select').styler();
  var mixer = mixitup('.release__products-inner');
  
});
