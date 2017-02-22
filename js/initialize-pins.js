'use strict';

window.initializePins = function () {
  var ENTER_KEY_CODE = 13;

  var pinMap = document.querySelector('.tokyo__pin-map'); // обертка для пинов

  window.similarApartments = null;

  // деактивация пина при переключении
  var disableActive = function () {
    var element = document.querySelector('.pin--active');
    if (element) {
      element.classList.remove('pin--active');
      element.setAttribute('aria-pressed', false);
    }
  };

  var onDialogShow = function (event) {
    disableActive(); // вызов функции удаления активного класса при клике на другой пин
    event.target.closest('.pin').classList.add('pin--active');
    event.target.closest('.pin').setAttribute('aria-pressed', true);
  };

  var onDialogClose = function () {
    var activePin = document.querySelector('.pin--active');
    activePin.focus();
  };

  window.load('https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data', function (data) {
    window.similarApartments = data;
    window.renderPins(3, pinMap); // вызываю функцию отрисовки нового пина: 3 штуки в соответствующую обертку
  });

  // Добавьте каждому из отрисованных пинов обработчик события клика (и активации с клавиатуры), который будет вызывать функцию показа карточки, передавая в нее данные соответствующего объявления.

  // нажатие на пины через делегирование
  pinMap.addEventListener('click', function (event) {
    var index = event.target.closest('.pin').getAttribut('data-index'); // индекс нажатого пина
    var data = window.similarApartments[index];
    // Лезешь в data по этому индексу
    if (index) {
      onDialogShow(event);
      window.showCard(onDialogClose, data);
    }

    // не только клик по пину, но и внутри него
    // if (event.target.closest('.pin')) {
    //   onDialogShow(event);
    //   window.showCard(onDialogClose, similarApartments);
    // }
  });

  pinMap.addEventListener('keydown', function (event) {
    if (event.target.closest('.pin') && event.keyCode === ENTER_KEY_CODE) {
      onDialogShow(event);
      window.showCard(onDialogClose, similarApartments);
    }
  });
};
