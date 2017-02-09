'use strict';

// initialize-pins.js — модуль, который экспортирует в глобальную области видимости функцию initializePins.
// Функция должна содержать всю логику по отрисовке меток на карте:
// добавление обработчиков, показ и закрытие карточки, отметку метки как активной.

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

  var showDialog = function (event) {
    disableActive(); // вызов функции удаления активного класса при клике на другой пин
    event.target.closest('.pin').classList.add('pin--active'); // почему не дает поставить this?
    event.target.closest('.pin').setAttribute('aria-pressed', true);
    dialog.style.display = 'block'; // открыть окно диалог при нажатии на пин
    dialog.setAttribute('aria-hidden', false);
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
      showDialog(event);
    }
  });

  pinMap.addEventListener('keydown', function (event) {
    if (event.target.closest('.pin') && event.keyCode === ENTER_KEY_CODE) {
      showDialog(event);
    }
  });

  // закрытие диалогового окна
  // по клику
  dialogClose.addEventListener('click', function () {
    dialog.style.display = 'none';
  });
};
