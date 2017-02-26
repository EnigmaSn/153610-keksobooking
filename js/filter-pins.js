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
    var pins = document.querySelectorAll('.pin:not(.pin__main)');
    var actualFeatures = null;

    // навешиваем обработчики на изменения содержимого элементов.
    housingType.addEventListener('change', showActionPins);
    housingPrice.addEventListener('change', showActionPins);
    housingRoomNumber.addEventListener('change', showActionPins);
    housingGuestsNumber.addEventListener('change', showActionPins);
    housingFeatures.addEventListener('click', showActionPins);

    var showActionPins = function () {
      actualFeatures = getActualFeatures(); // actionFeatures

      var filteredPins = data.prototype.slice.call(pins, 0);
      filteredPins = data.filter(filterRoomNumber);
      filteredPins = data.filter(filterType);
      filteredPins = data.filter(filterGuestsNumber);
      filteredPins = data.filter(filterPrice);
      filteredPins = data.filter(filterFeatures);
      window.initializePins(filteredPins);
    };

    // функция возвращает массив из обязательных значений features, которых выбрал пользователь.
    // При каждом событии функция возвращает новый массив
    function getActualFeatures() {
      var actionFeatures = [];
      var features = Array.prototype.slice.call(checkboxes, 0); // превращает набор элементов checkboxes в настоящий массив.
      features.forEach(function (element) {
        if (element.checked) {
          actionFeatures.push(element.value);
        }
      });
      return actionFeatures;
    }

    // фильтр для особенностей
    // если в данных features для конкретного пина нет хотя бы одного feature из обязательных значений, то возвращается false.
    var filterFeatures = function (element) {

    };
    // Через делегирование надо делать. На событие клик для контейнера фич вешаем функцию. Она смотрит на состояние чекбоксов в контейнере. Если чекбокс активный, то добавляем значение value этого чекбокса в массив.
    //   Получившийся массив представляет из себя список обязательных фич в объявлении. Если хотя бы одной фичи не будет, то объявление не должно отображаться.
    //   Потом в цикле нужно прогнать каждое значение этого массива и сделать проверку его наличия в data[index].features

    var filterType = function (element) {
      if (element.offer.type === housingType.value || housingType.value === 'any') {
        return true;
      } else {
        return false;
      }
    };

    var filterPrice = function (element) {
      var price = element.offer.price;

      switch (price === housingType.value) {
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
      if (element.offer.rooms === housingRoomNumber.value || housingRoomNumber.value === 'any') {
        return true;
      } else {
        return false;
      }
    };

    var filterGuestsNumber = function (element) {
      if (element.offer.guests === housingGuestsNumber.value || housingGuestsNumber.value === 'any') {
        return true;
      } else {
        return false;
      }
    };

    showActionPins();
  };
})();
