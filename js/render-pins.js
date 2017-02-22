'use strict';

// отрисовка пинов из шаблона

window.renderPins = function (num, container) {
  var templateElement = document.querySelector('#pin-template');
  var elementToClone = templateElement.content.querySelector('.pin');

  // цикл по указанному количеству пинов
  for (var i = 0; i < num; i++) {
    var newPin = elementToClone.cloneNode(true); // создаем новый пин на основе шаблона

    // значения координат из data
    newPin.style.left = window.similarApartments[i].location.x + 'px';
    newPin.style.bottom = window.similarApartments[i].location.y + 'px';
    newPin.querySelector('img').src = window.similarApartments[i].author.avatar;

    newPin.setAttribute('tabindex', i + 1 + ''); // очередь табанья
    newPin.setAttribute('data-pin-index', i + ''); // для оконкречиванья пинов)

    container.appendChild(newPin); // вставка пина в указанное место в DOM
  }
};
