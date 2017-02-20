'use strict';

window.initializePins = function () {
  var ENTER_KEY_CODE = 13;

  var pinMap = document.querySelector('.tokyo__pin-map'); // обертка для пинов
  window.similarApartments = null;
  window.load('https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data', function (data) {
    window.similarApartments = data;
    window.renderPins(3, pinMap); // вызываю функцию отрисовки нового пина: 3 штуки в соответствующую обертку
  });
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

  // вызов

  // нажатие на пины через делегирование
  pinMap.addEventListener('click', function (event) {
    // не только клик по пину, но и внутри него
    if (event.target.closest('.pin')) {
      onDialogShow(event);
      window.showCard(onDialogClose, similarApartments);
    }
  });

  pinMap.addEventListener('keydown', function (event) {
    if (event.target.closest('.pin') && event.keyCode === ENTER_KEY_CODE) {
      onDialogShow(event);
      window.showCard(onDialogClose, similarApartments);
    }
  });
};
