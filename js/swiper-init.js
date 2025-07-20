/* 	swiper services */
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


/* 	swiper technic */

const swiperTechnic = new Swiper('.swiper-technic', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          allowTouchMove: false,
          enabled: false,
          spaceBetween: 0,
        },
      },
    });

    

var pricesSlider = new Swiper('.prices__table', {
            slidesPerView: 'auto',
            wrapperClass: 'prices__t-body',
            slideClass: 'prices__t-row',
            pagination: {
                el: '.prices-pagination',
                clickable: true,
            },
      breakpoints: {
        768: {
          allowTouchMove: false,
          enabled: false,
          spaceBetween: 0,
        },
      },
            });