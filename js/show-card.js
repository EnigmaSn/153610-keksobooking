'use strict';

// Создайте модуль show-card.js, экспортирующий в глобальную область видимости функцию showCard. Функция должна показывать карточку выбранного отеля по нажатию на метку на карте

// Сделайте так, чтобы установка класса для активной метки, снятие класса с активной метки и возвращение фокуса на активную метку, если карточка была открыта с клавиатуры, производилось с помощью функции обратного вызова

// С помощью функции обратного вызова — сделайте так, чтобы при закрытии карточки, фокус возвращался на активную метку, если карточка была открыта с клавиатуры.

// Перепишите виджет synchronize-fields.js, связывающий поля между собой таким образом, чтобы логика изменения значения зависимого поля находилась в функции обратного вызова

window.showCard = (function () {

  var ESCAPE_KEY_CODE = 27;

  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close'); // Закрытие карточки объявления

  var closeHandler = null;

  var showDialog = function (cb) {
    dialog.style.display = 'block'; // открыть окно диалог при нажатии на пин
    dialog.setAttribute('aria-hidden', false);
    dialogClose.focus(); // пересмотреть вебинар

    if (typeof cb === 'function') {
      closeHandler = cb;
    }
  };

  var escCloseDialog = function () {
    document.addEventListener('keydown', function (event) {
      if (event.keyCode === ESCAPE_KEY_CODE) {
        dialog.style.display = 'none';
        dialog.setAttribute('aria-hidden', true);

        closeHandler();
      }
    });
  };

  // закрытие диалогового окна
  escCloseDialog(); // закрывать диалог по esc
  dialogClose.addEventListener('click', function () {
    dialog.style.display = 'none';
    dialog.setAttribute('aria-hidden', true);
  });

  return showDialog;
})();
