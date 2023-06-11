$(function () {
  

  $('.review__inner').slick({
    dots: true,
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="sr-only">Предыдущий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="images/symbol-defs.svg#icon-chevron"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="sr-only">Следующий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="images/symbol-defs.svg#icon-chevron"></use></svg></button>'
  });

  const slider = document.querySelector('.swiper');

  const swiper = new Swiper(slider, {
    
    slidesPerView: 3,
    spaceBetween: 30, 
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });
  
});