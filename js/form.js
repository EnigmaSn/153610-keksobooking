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

  var dataURL = 'https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data'; // загружаемые данные

  window.load(dataURL, function (data) {
    window.filterPins(data);
    window.initializePins(data.slice(0, 3));
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
