	const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween:16,
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  
breakpoints: {
      768: {
        allowTouchMove: false, 
        enabled: false,
        spaceBetween: 0,
      }
    }
 
});
