import * as flsFunction from "./modules/functions.js";

flsFunction.isWebp();

// Initialize Swiper 
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

if (document.documentElement.clientWidth > 767) {
   let items_pricing = document.querySelectorAll('.pricing .carousel .carousel-item')

   items_pricing.forEach((el) => {
      const minPerSlide = 3
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
         if (!next) {
            // wrap carousel by using first child
            next = items_pricing[0]
         }
         let cloneChild = next.cloneNode(true)
         el.appendChild(cloneChild.children[0])
         next = next.nextElementSibling
      }
   })

   // let items_classes = document.querySelectorAll('.classes .carousel .carousel-item')

   // items_classes.forEach((el) => {
   //    const minPerSlide = 3
   //    let next = el.nextElementSibling
   //    for (var i = 1; i < minPerSlide; i++) {
   //       if (!next) {
   //          // wrap carousel by using first child
   //          next = items_classes[0]
   //       }
   //       let cloneChild = next.cloneNode(true)
   //       el.appendChild(cloneChild.children[0])
   //       next = next.nextElementSibling
   //    }
   // })

   let items_trainers = document.querySelectorAll('.trainers .carousel .carousel-item')

   items_trainers.forEach((el) => {
      const minPerSlide = 2
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
         if (!next) {
            // wrap carousel by using first child
            next = items_trainers[0]
         }
         let cloneChild = next.cloneNode(true)
         el.appendChild(cloneChild.children[0])
         next = next.nextElementSibling
      }
   })

   let items_stories = document.querySelectorAll('.stories .carousel .carousel-item')

   items_stories.forEach((el) => {
      const minPerSlide = 2
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
         if (!next) {
            // wrap carousel by using first child
            next = items_stories[0]
         }
         let cloneChild = next.cloneNode(true)
         el.appendChild(cloneChild.children[0])
         next = next.nextElementSibling
      }
   })
}



