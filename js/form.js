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
  price.minLength = 1000;
  price.maxLength = 1000000;

  var time = document.querySelector('#time'); // время заезда
  var timeout = document.querySelector('#timeout'); // время выезда
  var roomNumber = document.querySelector('#room_number'); // количество комнат
  var capacity = document.querySelector('#capacity'); // вместимость (количество гостей)
  var type = document.querySelector('#type'); // тип жилья

  window.initializePins(); // пины и диалог

  window.synchronizeFields(time, timeout, ['12', '13', '14'], ['12', '13', '14'], 'value');
  window.synchronizeFields(roomNumber, capacity, ['1', '2', '100'], ['0', '3', '3'], 'value');

  window.synchronizeFields(type, price, ['1000', '0', '10000'], ['1000', '0', '10000'], 'min');
})();
