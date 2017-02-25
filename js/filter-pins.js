'use strict';

// вызывается в форме после инициализации трех пинов
window.filterPins = function (data) {
  var tokyoFilters = document.querySelector('.tokyo__filters');
  var housingType = tokyoFilters.querySelector('#housing_type');
  var housingPrice = tokyoFilters.querySelector('#housing_price');
  var housingRoomNumber = tokyoFilters.querySelector('#housing_room-number');
  var housingGuestsNumber = tokyoFilters.querySelector('#housing_guests-number');
  var housingFeatures = tokyoFilters.querySelector('#housing_features');

  var actualFeatures = null;
  var pins = document.querySelectorAll('.pin:not(.pin__main)'); // все пины, кроме большого

  // навешиваем обработчики на изменения содержимого элементов.
  housingType.addEventListener('change', function () {
    showActionPins();
  });
  housingPrice.addEventListener('change', function () {
    showActionPins();
  });
  housingRoomNumber.addEventListener('change', function () {
    showActionPins();
  });
  housingGuestsNumber.addEventListener('change', function () {
    showActionPins();
  });
  housingFeatures.addEventListener('click', function () {
    showActionPins();
  });

  // эта функция скрывает все пины путем добавления к ним класса invisible (прописан в new.css
  var hidePins = function () {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.add('invisible');
    }
  };

  // Функция сначала скрывает все элементы. Потом с помощью фильтрации находим подходящие элементы и удаляем из них класс invisible
  var showActionPins = function () {
    actualFeatures = getActualFeatures(); // новый массив с фичами, которые выбрал пользователь
    hidePins(); // скрываем все пины
    var filteredPins = Array.prototype.slice.call(pins, 0); // call вставляет первым параметром явно указанный this (pins)

    // Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
    filteredPins = filteredPins.filter(checkRoomNumber);
    filteredPins = filteredPins.filter(checkType);
    filteredPins = filteredPins.filter(checkHousingGuestsNumber);
    filteredPins = filteredPins.filter(checkPrice);
    filteredPins = filteredPins.filter(hasFeatures);
    showFilteredPins(filteredPins);
  }

  // фильтр для количества комнат
  var checkRoomNumber = function () {
    // фильтровали, фильтровали, да не выфильтровали
};