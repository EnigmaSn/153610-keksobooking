'use strict';

// Создайте модуль show-card.js, экспортирующий в глобальную область видимости функцию showCard. Функция должна показывать карточку выбранного отеля по нажатию на метку на карте

// Сделайте так, чтобы установка класса для активной метки, снятие класса с активной метки и возвращение фокуса на активную метку, если карточка была открыта с клавиатуры, производилось с помощью функции обратного вызова

// Перепишите виджет synchronize-fields.js, связывающий поля между собой таким образом, чтобы логика изменения значения зависимого поля находилась в функции обратного вызова

window.showCard = function (callback) {

  // callback = window.onDialogShow();
  var ESCAPE_KEY_CODE = 27;

  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close'); // Закрытие карточки объявления

  var showDialog = function (callback) {
    window.dialog.style.display = 'block'; // открыть окно диалог при нажатии на пин
    window.dialog.setAttribute('aria-hidden', false);
  };

  var escCloseDialog = function () {
    document.addEventListener('keydown', function (event) {
      if (event.keyCode === ESCAPE_KEY_CODE) {
        dialog.style.display = 'none';
        dialog.setAttribute('aria-hidden', true);
      }
    });
  };

  // закрытие диалогового окна
  escCloseDialog(); // закрывать диалог по esc
  dialogClose.addEventListener('click', function () {
    dialog.style.display = 'none';
  });

  // так?
  return {
    showDialog: showDialog(callback)
  };
};
