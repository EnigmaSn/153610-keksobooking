'use strict';

// Последний параметр содержит строку, с названием свойства второго объекта, которое нужно изменять при изменении первого (например, 'max' или 'value').

var synchronizeFields = function (element1, element2, arr1, arr2, property) {
  var title = document.querySelector('#title'); // заголовок объявления
  var price = document.querySelector('#price'); // цена за ночь
  var address = document.querySelector('#address');

  var time = document.querySelector('#time'); // время заезда
  var timeout = document.querySelector('#timeout'); // время выезда
  var type = document.querySelector('#type'); // тип жилья

  var roomNumber = document.querySelector('#room_number'); // количество комнат
  var capacity = document.querySelector('#capacity'); // вместимость (количество гостей)
  var roomNumberValues = ['1', '2', '100'];
  var capacityValues = ['0', '3'];

  if (property === 'value') {
    element1.addEventListener('change', function (event) {
      var index = arr1.indexOf(event.target.value);
      element2[property] = arr2[index];
    });
    element2.addEventListener('change', function (event) {
      var index = arr2.indexOf(event.target.value);
      element1[property] = arr1[index];
    });
  }

  // element1.addEventListener('change', function () {
  //   element2[value] = element1.[value];
  // });

  // синхронизация количества комнат и гостей
  // if (element1.selectedIndex === 0) {
  //     element2.selectedIndex = 1;
  //   } else {
  //     element2.selectedIndex = 0;
  //   }

  // var roomCapacity = function () {
  //   if (element1.value === roomNumberValues[0]) {
  //     element2.value = capacityValues[0];
  //   } else {
  //     element2.value = capacityValues[1];
  //   }
  // };

  // Следующие два параметра представляют собой два массива, которые содержат синхронизируемые значения. Например, если при выборе в первом поле значения с value а, во втором должно выбираться значение b (и наоборот), то массивы должны выглядеть как ['a'] и ['b'].


  /* Вызов */

  // Проверка правильности введенных данных
  // Заголовок объявления:
  title.required = true;
  title.minLength = 30;
  title.maxLength = 100;

  // Цена за ночь
  price.required = true;
  price.type = 'number'; // только цифры
  price.minLength = 1000;
  price.maxLength = 1000000;

  // Адрес
  address.required = true;

  // Поля «время заезда» и «время выезда» синхронизированы
  // element1.addEventListener('change', function () {
  //   element2.value = element1.value;
  // });
  // element2.addEventListener('change', function () {
  //   element1.value = element2.value;
  // });

  // Значение поля «Тип жилья» синхронизировано с минимальной ценой
  // type.addEventListener('change', function () {
  //   if (type.selectedIndex === 0) {
  //     price.value = 1000;
  //     price.min = 1000;
  //   } else if (type.selectedIndex === 1) {
  //     price.value = 0;
  //     price.min = 0;
  //   } else {
  //     price.value = 10000;
  //     price.min = 10000;
  //   }
  // });

  // Количество комнат связано с количеством гостей:
  // roomCapacity();
  // element1.addEventListener('change', roomCapacity);
};