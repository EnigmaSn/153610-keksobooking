'use strict';

// отрисовка пинов из шаблона

(function () {

  var ENTER_KEY_CODE = 13;
  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;

  var container = document.querySelector('.tokyo__pin-map'); // обертка для пинов

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

  // отрисовка конкретного пина
  var renderPin = function (flat, i) {

    var newPin = elementToClone.cloneNode(true); // создаем новый пин на основе шаблона
    // значения координат из data
    newPin.style.left = (flat.location.x - PIN_WIDTH / 2) + 'px';
    newPin.style.top = (flat.location.y - PIN_HEIGHT) + 'px';
    newPin.querySelector('img').src = flat.author.avatar;

    newPin.setAttribute('tabindex', i + 1); // очередь табанья
    newPin.setAttribute('data-pin-index', i); // для оконкречиванья пинов)

    newPin.addEventListener('click', function (event) {
      onDialogShow(event);
      window.showCard(onDialogClose, flat);
    });
    newPin.addEventListener('keydown', function (event) {
      if (event.keyCode === ENTER_KEY_CODE) {
        onDialogShow(event);
        window.showCard(onDialogClose, flat);
      }
    });

    return newPin;
  };

  // общая отрисовка пинов

  window.initializePins = function (data) {
    var children = [].slice.call(container.children); // копия массива children
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (!child.classList.contains('pin__main')) {
        container.removeChild(child);
      }
    }

    var renderedPinFragment = document.createDocumentFragment();

    // цикл по указанному количеству пинов
    for (var j = 0; j < data.length; j++) {
      var flat = data[j];
      var renderedPin = renderPin(flat, j);
      renderedPinFragment.appendChild(renderedPin);
    }
    container.appendChild(renderedPinFragment); // вставка фрагмента с пинами в указанное место в DOM
  };
})();


