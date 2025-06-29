let showAllButton = document.querySelector('.show-all__button');
let swiperList = document.querySelector('.swiper'); 
let readMoreText = document.querySelector('.read-more__text');

let readTextOpen = readMoreText.textContent;
let readTextHide = readMoreText.dataset.textHide;

showAllButton.onclick = function () {
  swiperList.classList.toggle('services--open');
  showAllButton.classList.toggle('active');

  const isOpen = swiperList.classList.contains('services--open');
  readMoreText.textContent = isOpen ? readTextHide : readTextOpen;
};

