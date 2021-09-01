'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.feedbacks__slider', {
        // Optional parameters
        // loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
        grabCursor: true,
        // If we need pagination
        pagination: {
          el: '.slider__pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        }
      });
});