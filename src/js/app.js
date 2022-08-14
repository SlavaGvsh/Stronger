import * as flsFunction from "./modules/functions.js";

flsFunction.isWebp();

// window.addEventListener('resize', caruselFunction);

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

   let items_classes = document.querySelectorAll('.classes .carousel .carousel-item')

   items_classes.forEach((el) => {
      const minPerSlide = 3
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
         if (!next) {
            // wrap carousel by using first child
            next = items_classes[0]
         }
         let cloneChild = next.cloneNode(true)
         el.appendChild(cloneChild.children[0])
         next = next.nextElementSibling
      }
   })

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



