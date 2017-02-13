'use strict';

// Создайте модуль show-card.js, экспортирующий в глобальную область видимости функцию showCard. Функция должна показывать карточку выбранного отеля по нажатию на метку на карте

// Сделайте так, чтобы установка класса для активной метки, снятие класса с активной метки и возвращение фокуса на активную метку, если карточка была открыта с клавиатуры, производилось с помощью функции обратного вызова

// Перепишите виджет synchronize-fields.js, связывающий поля между собой таким образом, чтобы логика изменения значения зависимого поля находилась в функции обратного вызова

window.showCard = (function () {
  var openCard = function () {
    window.dialog.style.display = 'block'; // открыть окно диалог при нажатии на пин
    window.dialog.setAttribute('aria-hidden', false);
  };

  var changeActivePin = function (event) {
    window.disableActive(); // вызов функции удаления активного класса при клике на другой пин
    event.target.closest('.pin').classList.add('pin--active');
    event.target.closest('.pin').setAttribute('aria-pressed', true);
  };

  if (changeActivePin === 'function') {
    changeActivePin();
  }

  return function (callback) {
    openCard();
    changeActivePin();
    changeActivePin = callback;
  };
})();
