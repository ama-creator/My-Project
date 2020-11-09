$(function(){
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 1
        },
    });
});

$('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
});

$('.herois__slider-pic').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.herois__slider-text',
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="next"></button>',
    responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false
          }
        },
    ]
});

  $('.herois__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.herois__slider-pic',
    arrows: false
  });