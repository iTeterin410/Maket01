document.addEventListener('DOMContentLoaded', function () {
  // Элементы меню
  const buttonBurger = document.querySelector('.round-button--burger');
  const leftMenu = document.querySelector('.left-menu');
  const leftMenuButtonIcburger = document.getElementById('left-menu-button-icburger');
  const menuHidden = document.querySelector('.hidden');

  // Чат-модалка
  const buttonChat = document.querySelector('.round-button--chat');
  const HeaderButtonChat = document.getElementById('header-button-chat');
  const modalFeedback = document.getElementById('modalFeedback');
  const feedbackBtnIcburger = document.getElementById('feedback-btn-icburger');

  // Звонок-модалка
  const callButtons = document.querySelectorAll('.round-button--call');
  const modalCallback = document.getElementById('modalCallback');
  const callbackBtnIcburger = document.getElementById('callback-btn-icburger'); // кнопка закрытия звонка

  // Открытие меню
  buttonBurger.onclick = function () {
    leftMenu.classList.remove('left-menu--none');
    menuHidden.classList.add('overlay');
  };

  // Закрытие меню
  leftMenuButtonIcburger.onclick = function () {
    leftMenu.classList.add('left-menu--none');
    menuHidden.classList.remove('overlay');
  };

  // Закрытие всех окон по клику на фон
  menuHidden.onclick = function () {
    leftMenu.classList.add('left-menu--none');
    menuHidden.classList.remove('overlay');
    modalFeedback.classList.remove('modal--active');
    modalCallback.classList.remove('modal--active');
  };

  // Открытие чат-модалки
  buttonChat.onclick = function () {
    leftMenu.classList.add('left-menu--none');
    modalFeedback.classList.add('modal--active');
    menuHidden.classList.add('overlay');
  };

  HeaderButtonChat.onclick = function () {
    leftMenu.classList.add('left-menu--none');
    modalFeedback.classList.add('modal--active');
    menuHidden.classList.add('overlay');
  };

  // Закрытие чат-модалки
  if (feedbackBtnIcburger) {
    feedbackBtnIcburger.onclick = function () {
      modalFeedback.classList.remove('modal--active');
      menuHidden.classList.remove('overlay');
    };
  }

  // Открытие модалки звонка
  callButtons.forEach(button => {
    button.addEventListener('click', function () {
      leftMenu.classList.add('left-menu--none');
      modalCallback.classList.add('modal--active');
      menuHidden.classList.add('overlay');
    });
  });

  // Закрытие модалки звонка
  if (callbackBtnIcburger) {
    callbackBtnIcburger.onclick = function () {
      modalCallback.classList.remove('modal--active');
      menuHidden.classList.remove('overlay');
    };
  }

  // Отображение меню по умолчанию на больших экранах
  if (window.innerWidth >= 1440) {
    leftMenu.classList.remove('left-menu--none');
  }
});
