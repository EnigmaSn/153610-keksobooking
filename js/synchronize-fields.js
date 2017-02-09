'use strict';

window.synchronizeFields = function (element1, element2, array1, array2, property) {

  var price = document.querySelector('#price'); // цена за ночь
  var type = document.querySelector('#type'); // тип жилья
  var propertyTypeArray = ['flat', 'hovel', 'palace'];
  var priceArray = ['1000', '0', '10000'];

  var time = document.querySelector('#time'); // время заезда
  var timeout = document.querySelector('#timeout'); // время выезда
  var timeArray = ['12', '13', '14'];
  var timeOutArray = ['12', '13', '14'];

  var roomNumber = document.querySelector('#room_number'); // количество комнат
  var capacity = document.querySelector('#capacity'); // вместимость (количество гостей)
  var roomsArray = ['1', '2', '100'];
  var capacityArray = ['0', '3', '3'];

  // вот это выглядит правдоподобно, но маааагия
  element1.addEventListener('change', function () {
    var selectedVal = array1.indexOf(element1.value);
    element2[property] = array2[selectedVal];
  });

  element2.addEventListener('change', function () {
    var selectedVal = array2.indexOf(element2.value);
    element1[property] = array1[selectedVal];
  });

  // if (element1 === time) {
  //   element1.addEventListener('change', function () {
  //     element2.value = element1.value;
  //   });
  //   element2.addEventListener('change', function () {
  //     element1.value = element2.value;
  //   });
  // } else if (element1 === roomNumber) {
  //   var roomCapacity = function () {
  //     if (element1.selectedIndex === 0) {
  //       element2.selectedIndex = 1;
  //     } else {
  //       element2.selectedIndex = 0;
  //     }
  //   };
  //   roomCapacity();
  //   element1.addEventListener('change', roomCapacity);
  // }


  // element1.addEventListener('change', function () {
  //   element2[property] = array2[array1.indexOf(element1.value)];
  // });
};



