'use strict';

window.initializePins = function () {
  var ENTER_KEY_CODE = 13;

  var pinMap = document.querySelector('.tokyo__pin-map'); // обертка для пинов

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

  // вызов

  // нажатие на пины через делегирование
  pinMap.addEventListener('click', function (event) {
    // не только клик по пину, но и внутри него
    if (event.target.closest('.pin')) {
      window.showCard(onDialogShow);
    }
  });

  pinMap.addEventListener('keydown', function (event) {
    if (event.target.closest('.pin') && event.keyCode === ENTER_KEY_CODE) {
      window.showCard(onDialogShow);
    }
  });
};
