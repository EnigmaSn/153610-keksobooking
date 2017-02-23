'use strict';

(function () {
  var address = document.querySelector('#address');
  address.required = true;

  var title = document.querySelector('#title'); // заголовок объявления
  title.required = true;
  title.minLength = 30;
  title.maxLength = 100;

  var price = document.querySelector('#price'); // цена за ночь
// Цена за ночь
  price.required = true;
  price.type = 'number'; // только цифры
  price.min = 1000;
  price.max = 1000000;

  var time = document.querySelector('#time'); // время заезда
  var timeout = document.querySelector('#timeout'); // время выезда
  var roomNumber = document.querySelector('#room_number'); // количество комнат
  var capacity = document.querySelector('#capacity'); // вместимость (количество гостей)
  var type = document.querySelector('#type'); // тип жилья

  var pinMap = document.querySelector('.tokyo__pin-map'); // обертка для пинов
  var loadingData = 'https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data';

  window.load(loadingData, function (data) {
    window.initializePins(data, pinMap); // вызываю функцию отрисовки нового пина: 3 штуки в соответствующую обертку
  });

  window.synchronizeFields(time, timeout, ['12', '13', '14'], ['12', '13', '14'], (function (value) {
    timeout.value = value;
  }));
  window.synchronizeFields(timeout, time, ['12', '13', '14'], ['12', '13', '14'], function (value) {
    time.value = value;
  });

  window.synchronizeFields(roomNumber, capacity, ['1', '2', '100'], ['0', '3', '3'], function (value) {
    capacity.value = value;
  });

  window.synchronizeFields(type, price, ['flat', 'bungalo', 'palace'], ['1000', '0', '10000'], function (value) {
    price.min = value;
  });
})();
