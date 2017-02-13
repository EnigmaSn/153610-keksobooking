'use strict';

window.initializePins = function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var dialog = document.querySelector('.dialog');
  var pinMap = document.querySelector('.tokyo__pin-map'); // обертка для пинов
  var dialogClose = document.querySelector('.dialog__close'); // Закрытие карточки объявления

  // деактивация пина при переключении
  var disableActive = function () {
    var element = document.querySelector('.pin--active');
    if (element) {
      element.classList.remove('pin--active');
      element.setAttribute('aria-pressed', false);
    }
  };

  var escCloseDialog = function () {
    document.addEventListener('keydown', function (event) {
      if (event.keyCode === ESCAPE_KEY_CODE) {
        dialog.style.display = 'none';
        dialog.setAttribute('aria-hidden', true);
      }
    });
  };

  // вызов

  escCloseDialog(); // закрывать диалог по esc

  // нажатие на пины через делегирование
  pinMap.addEventListener('click', function (event) {
    // не только клик по пину, но и внутри него
    if (event.target.closest('.pin')) {
      window.showCard(event);
    }
  });

  pinMap.addEventListener('keydown', function (event) {
    if (event.target.closest('.pin') && event.keyCode === ENTER_KEY_CODE) {
      window.showCard(event);
    }
  });

  // закрытие диалогового окна
  // по клику
  dialogClose.addEventListener('click', function () {
    dialog.style.display = 'none';
  });

  return {
    dialog: dialog,
    disableActive: disableActive
  };
};
