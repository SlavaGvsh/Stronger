import * as flsFunction from "./modules/functions.js";

flsFunction.isWebp();

// Initialize Swiper 
const swiperPricing = new Swiper(".pricing .swiper", {

   navigation: {
      nextEl: '.pricing .swiper-button-next',
      prevEl: '.pricing .swiper-button-prev',
   },
   slidesPerView: 1,
   spaceBetween: 0,
   slidesPerGroup: 1,
   speed: 800,
   loop: true,
   loopFillGroupWithBlank: true,
   breakpoints: {
      768: {
         slidesPerView: 2
      },
      992: {
         slidesPerView: 3
      },
      1200: {
         slidesPerView: 3
      },
   }

});
const swiperClasses = new Swiper(".classes .swiper", {

   navigation: {
      nextEl: '.classes .swiper-button-next',
      prevEl: '.classes .swiper-button-prev',
   },
   slidesPerView: 1,
   spaceBetween: 0,
   slidesPerGroup: 1,
   speed: 800,
   loop: true,
   loopFillGroupWithBlank: true,
   breakpoints: {
      // when window width is >= 768px
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      // when window width is >= 992px
      992: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
         slidesPerView: 3,
         spaceBetween: 40,
      },
   }

});
const swiperTrainers = new Swiper(".trainers .swiper", {

   navigation: {
      nextEl: '.trainers .swiper-button-next',
      prevEl: '.trainers .swiper-button-prev',
   },
   slidesPerView: 1,
   spaceBetween: 0,
   slidesPerGroup: 1,
   speed: 800,
   loop: true,
   loopFillGroupWithBlank: true,
   breakpoints: {
      // when window width is >= 768px
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      // when window width is >= 992px
      992: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
   }

});
const swiperStories = new Swiper(".stories .swiper", {

   navigation: {
      nextEl: '.stories .swiper-button-next',
      prevEl: '.stories .swiper-button-prev',
   },
   slidesPerView: 1,
   spaceBetween: 0,
   slidesPerGroup: 1,
   speed: 800,
   loop: true,
   loopFillGroupWithBlank: true,
   breakpoints: {
      // when window width is >= 768px
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      // when window width is >= 992px
      992: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
   }

});

// include('../../../node_modules/@popperjs/core/dist/umd/popper.js')
// include('../../node_modules/bootstrap/dist/js')

// Импортируем Popper
//=include('../../../node_modules/@popperjs/core/dist/umd/popper.js')
// include('../../node_modules/@popperjs/core/dist/umd/popper.js')

// Импортируем Bootstrap 5
// =include('../../../node_modules/bootstrap/dist/js/bootstrap.js')
// include('../../node_modules/bootstrap/dist/js/bootstrap.js')
// include('../../node_modules/swiper/swiper-bundle.min.js')
