'use strict';

window.initializePins = function () {
  var pinMap = document.querySelector('.tokyo__pin-map'); // обертка для пинов

  window.load('https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data', function (data) {
    window.renderPins(data, pinMap); // вызываю функцию отрисовки нового пина: 3 штуки в соответствующую обертку
  });
};
