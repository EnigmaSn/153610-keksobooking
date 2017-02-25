'use strict';

// вызывается в форме после инициализации трех пинов
(function () {
  window.filterPins = function (data) {

    var tokyoFilters = document.querySelector('.tokyo__filters');
    var housingType = tokyoFilters.querySelector('#housing_type');
    var housingPrice = tokyoFilters.querySelector('#housing_price');
    var housingRoomNumber = tokyoFilters.querySelector('#housing_room-number');
    var housingGuestsNumber = tokyoFilters.querySelector('#housing_guests-number');
    var housingFeatures = tokyoFilters.querySelector('#housing_features');
    var checkboxes = housingFeatures.querySelectorAll('input');

    var actualFeatures = null;
    var pins = document.querySelectorAll('.pin:not(.pin__main)'); // все пины, кроме большого

    // // навешиваем обработчики на изменения содержимого элементов.
    // housingType.addEventListener('change', function () {
    //   showActionPins();
    // });
    // housingPrice.addEventListener('change', function () {
    //   showActionPins();
    // });
    // housingRoomNumber.addEventListener('change', function () {
    //   showActionPins();
    // });
    // housingGuestsNumber.addEventListener('change', function () {
    //   showActionPins();
    // });
    // housingFeatures.addEventListener('click', function () {
    //   showActionPins();
    // });
    //
    // // эта функция скрывает все пины путем добавления к ним класса invisible (прописан в new.css
    // var hidePins = function () {
    //   for (var i = 0; i < pins.length; i++) {
    //     pins[i].classList.add('invisible');
    //   }
    // };
    //
    // // Функция сначала скрывает все элементы. Потом с помощью фильтрации находим подходящие элементы и удаляем из них класс invisible
    // var showActionPins = function () {
    //   actualFeatures = getActualFeatures(); // новый массив с фичами, которые выбрал пользователь
    //   hidePins(); // скрываем все пины
    //   var filteredPins = actualFeatures.prototype.slice.call(pins, 0); // call вставляет первым параметром явно указанный this (pins)
    //
    //   // Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
    //   // Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.
    //   // filteredPins = filteredPins.filter(checkRoomNumber);
    //   filteredPins = filteredPins.filter(checkType);
    //   // filteredPins = filteredPins.filter(checkHousingGuestsNumber);
    //   // filteredPins = filteredPins.filter(checkPrice);
    //   // filteredPins = filteredPins.filter(hasFeatures);
    //   // showFilteredPins(filteredPins);
    // };
    //
    // // фильтр для типа жилья
    // var checkType = function (item) {
    //   var type = housingType.value;
    //   if (type === 'any') {
    //     return true;
    //   }
    //   return data[index].offer.type === type;
    // };
    //
    // // фильтр для стоимости
    // var checkPrice = function checkPrice(item) {
    //   var price = data[item.dataset.pinIndex].offer.price;
    //   switch (housingPrice.value) {
    //     case 'low':
    //       return price < 10000;
    //     case 'middle':
    //       return price >= 10000 && price < 50000;
    //     case 'hight':
    //       return price >= 50000;
    //     default:
    //       return false;
    //   }
    // };
    //
    // // фильтр для количества комнат
    // var checkRoomNumber = function (item) {
    //   var index = item.dataset.pinIndex;
    //   var numberOfRooms = housingRoomNumber.value;
    //   if (numberOfRooms === 'any') {
    //     return true;
    //   }
    //   return data[index].offer.rooms === +numberOfRooms;
    // };
    //
    // // фильтр для количества гостей
    // var checkHousingGuestsNumber = function (item) {
    //   var index = item.dataset.pinIndex;
    //   var numberOfGuests = housingGuestsNumber.value;
    //   if (numberOfGuests === 'any') {
    //     return true;
    //   }
    //   return data[index].offer.guests === +numberOfGuests;
    // };
    //
    // // фильтр для особенностей
    // // если в данных features для конкретного пина нет хотя бы одного feature из обязательных значений, то возвращается false.
    // var hasFeatures = function (item) {
    //   var index = item.dataset.pinIndex;
    //   var result = true;
    //   var features = data[index].offer.features;
    //   for (var i = 0; i < actualFeatures.length; i++) {
    //     if (features.indexOf(actualFeatures[i]) === -1) {
    //       result = false;
    //     }
    //   }
    //   return result;
    // };
    //
    // // удаляет класс invisible. Если активный пин не попал в отфильтрованный массив, то скрываем его карту и делаем его неактивным.
    // var showFilteredPins = function (elements) {
    //   var activePinIsFiltered = true;
    //   var activePin = document.querySelector('.pin--active');
    //   elements = Array.prototype.slice.call(elements, 0);
    //   for (var i = 0; i < elements.length; i++) {
    //     elements[i].classList.remove('invisible');
    //     // если условие сработало, то pin попал в список отображаемых.
    //     if (elements[i].classList.contains('pin--active')) {
    //       activePinIsFiltered = false;
    //     }
    //   }
    //   // если pin--active среди отображаемых нет, то проверяем есть ли он вообще. Если есть, то деактивируем и прячем окно диалога
    //   if (activePinIsFiltered && activePin) {
    //     deactivatePin(activePin);
    //     window.hideCard();
    //   }
    // };
    //
    // // функция возвращает массив из обязательных значений features, которых выбрал пользователь.
    // // При каждом событии функция возвращает новый массив
    // var getActualFeatures = function () {
    //   var actionFeatures = [];
    //   var features = Array.prototype.slice.call(checkboxes, 0);
    //   features.forEach(function (item) {
    //     if (item.checked) {
    //       actionFeatures.push(item.value);
    //     }
    //   });
    //   return actionFeatures;
    // };
    //
    // var deactivatePin = function (activePin) {
    //   activePin.classList.remove('pin--active');
    //   activePin.setAttribute('aria-pressed', 'false');
    // };
    //
    // // вызываем функцию для первоначальной фильтрации. В ином случае на экране будут выведены все пины, даже те, которые попадают под фильтр.
    // showActionPins();

    housingType.addEventListener('change', function () {
      var filteredPins = data.filter(filterType);

      window.initializePins(filteredPins);
    });

    var filterType = function (element) {
      if (element.offer.type === housingType.value || housingType.value === 'any') {
        return true;
      } else {
        return false;
      }
    };

    return data.filter(filterType);
  };
})();
