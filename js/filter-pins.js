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

    var showActionPins = function () {

      var filteredPins = data.slice();
      filteredPins = filteredPins.filter(filterRoomNumber);
      filteredPins = filteredPins.filter(filterType);
      filteredPins = filteredPins.filter(filterGuestsNumber);
      filteredPins = filteredPins.filter(filterPrice);
      filteredPins = filteredPins.filter(filterFeatures);
      window.initializePins(filteredPins);
    };

    // навешиваем обработчики на изменения содержимого элементов.
    housingType.addEventListener('change', showActionPins);
    housingPrice.addEventListener('change', showActionPins);
    housingRoomNumber.addEventListener('change', showActionPins);
    housingGuestsNumber.addEventListener('change', showActionPins);
    housingFeatures.addEventListener('click', showActionPins);

    var getSelectedFeatures = function () {
      var selected = [];
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          selected.push(checkboxes[i].value);
        }
      }
      return selected;
    };
    var filterFeatures = function (element) {
      var features = getSelectedFeatures();
      var count = 0;
      for (var n = 0; n < features.length; n++) {
        if (element.offer.features.includes(features[n])) {
          count++;
        }
      }

      return count === features.length;
    };

    var filterType = function (element) {
      return element.offer.type === housingType.value || housingType.value === 'any';
    };

    var filterPrice = function (element) {
      var price = element.offer.price;

      switch (housingPrice.value) {
        case 'low':
          return price < 10000;
        case 'middle':
          return price >= 10000 && price < 50000;
        case 'hight':
          return price >= 50000;
        default:
          return false;
      }
    };

    var filterRoomNumber = function (element) {
      return element.offer.rooms === parseInt(housingRoomNumber.value, 10) || housingRoomNumber.value === 'any';
    };

    var filterGuestsNumber = function (element) {
      return element.offer.guests === parseInt(housingGuestsNumber.value, 10) || housingGuestsNumber.value === 'any';
    };
  };
})();
