const showAllButton = document.querySelector('.services-show-all__button');
let swiperList = document.querySelector('.swiper'); 
let readMoreText = document.querySelector('.services-read-more__text');

let readTextOpen = readMoreText.textContent;
let readTextHide = readMoreText.dataset.textHide;

showAllButton.onclick = function () {
  swiperList.classList.toggle('services--open');
  showAllButton.classList.toggle('active');

  const isOpen = swiperList.classList.contains('services--open');
  readMoreText.textContent = isOpen ? readTextHide : readTextOpen;
};


/* кнопка technic */

const technicShowAllButton = document.querySelector('.technic-show-all__button');
let technicSwiperList = document.querySelector('.technic-swiper-desktop'); 
let technicReadMoreText = document.querySelector('.technic-read-more__text');

let technicReadTextOpen = technicReadMoreText.textContent;
let technicReadTextHide = technicReadMoreText.dataset.textHide;

technicShowAllButton.onclick = function () {
  technicSwiperList.classList.toggle('technic--open');
  technicShowAllButton.classList.toggle('active');

  const isOpen = technicSwiperList.classList.contains('technic--open');
  technicReadMoreText.textContent = isOpen ? technicReadTextHide : technicReadTextOpen;
};
   
