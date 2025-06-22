        let showAllButton = document.querySelector('.show-all__button');
        let swiperList = document.querySelector('.swiper'); 
        let showAllIconDown = document.querySelector('.show-all__icon-down');
        let readMoreText = document.querySelector('.read-more__text');
        
        let readTextOpen = readMoreText.textContent;
        let readTextHide = readMoreText.dataset.textHide;
        
        showAllButton.onclick = function() {
            swiperList.classList.toggle('services--open');
            showAllIconDown.classList.toggle('show-all__icon-up');
            
            if(readMoreText.textContent == readTextOpen){
                readMoreText.textContent = readTextHide;
            } else{
                readMoreText.textContent = readTextOpen;
            }

            
        }

