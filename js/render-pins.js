'use strict';

// отрисовка пинов из шаблона

(function () {

  var ENTER_KEY_CODE = 13;
  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;


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

  var templateElement = document.querySelector('#pin-template');
  var elementToClone = templateElement.content.querySelector('.pin');

  var renderPin = function (flat, i) {

    var newPin = elementToClone.cloneNode(true); // создаем новый пин на основе шаблона
    // значения координат из data
    newPin.style.left = (flat.location.x - PIN_WIDTH/2) + 'px';
    newPin.style.top = (flat.location.y - PIN_HEIGHT) + 'px';
    newPin.querySelector('img').src = flat.author.avatar;

    newPin.setAttribute('tabindex', i + 1); // очередь табанья
    newPin.setAttribute('data-index', i); // для оконкречиванья пинов)

    newPin.addEventListener('click', function () {
      window.showCard(onDialogClose, flat);
    });
    newPin.addEventListener('keydown', function () {
      if (event.keyCode === ENTER_KEY_CODE) {
        window.showCard(onDialogClose, flat);
      }
    });

    return newPin;
  };

  window.renderPins = function (apartments, container) {
    // цикл по указанному количеству пинов
    for (var i = 0; i < apartments.length; i++) {
      var flat = apartments[i];
      var renderedPin = renderPin(flat, i);
      container.appendChild(renderedPin); // вставка пина в указанное место в DOM
    }
  };
})();


