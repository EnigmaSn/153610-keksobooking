'use strict';

window.initializePins = function () {
  var ENTER_KEY_CODE = 13;

  var pinMap = document.querySelector('.tokyo__pin-map'); // обертка для пинов

  // вызов

  // нажатие на пины через делегирование
  pinMap.addEventListener('click', function (event) {
    // не только клик по пину, но и внутри него
    if (event.target.closest('.pin')) {
      window.showDialog(callback);
    }
  });

  pinMap.addEventListener('keydown', function (event) {
    if (event.target.closest('.pin') && event.keyCode === ENTER_KEY_CODE) {
      window.showDialog(callback);
    }
  });
};
