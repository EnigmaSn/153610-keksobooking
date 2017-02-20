'use strict';

// отрисовка пинов из шаблона

window.renderPins = function (num, container) {
  var templateElement = document.querySelector('#pin-template');
  var elementToClone = templateElement.content.querySelector('.pin');

  // цикл по указанному количеству пинов
  for (var i = 0; i < num; i++ {
    var newPin = elementToClone.cloneNode(true); // создаем новый пин на основе шаблона

    container.appendChild(newPin); // вставка пина в указанное место в DOM

  }

};