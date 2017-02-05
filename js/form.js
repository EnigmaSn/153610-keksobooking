'use strict';
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var dialog = document.querySelector('.dialog'); // скрывашка
var pinMap = document.querySelector('.tokyo__pin-map'); // обертка для пинов
var dialogClose = document.querySelector('.dialog__close'); // Закрытие карточки объявления

var title = document.querySelector('#title'); // заголовок объявления
var price = document.querySelector('#price'); // цена за ночь
var address = document.querySelector('#address');

var time = document.querySelector('#time'); // время заезда
var timeout = document.querySelector('#timeout'); // время выезда
var type = document.querySelector('#type'); // тип жилья

var roomNumber = document.querySelector('#room_number'); // количество комнат
var capacity = document.querySelector('#capacity'); // вместимость (количество гостей)

// деактивация пина при переключении
var disableActive = function () {
  var element = document.querySelector('.pin--active');
  if (element) {
    element.classList.remove('pin--active');
    element.setAttribute('aria-pressed', false);
  }
};

var showDialog = function () {
  disableActive(); // вызов функции удаления активного класса при клике на другой пин
  event.target.closest('.pin').classList.add('pin--active'); // почему не дает поставить this?
  event.target.closest('.pin').setAttribute('aria-pressed', true);
  dialog.style.display = 'block'; // открыть окно диалог при нажатии на пин
  dialog.setAttribute('aria-hidden', false);
  escCloseDialog();
};

var escCloseDialog = function () {
  document.addEventListener('keydown', function (event) {
    if (event.keyCode === ESCAPE_KEY_CODE) {
      dialog.style.display = 'none';
      dialog.setAttribute('aria-hidden', true);
    }
  });
};

// синхронизация количества комнат и гостей
var roomCapacity = function () {
  if (roomNumber.selectedIndex === 0) {
    capacity.selectedIndex = 1;
  } else {
    capacity.selectedIndex = 0;
  }
};

// нажатие на пины через делегирование
pinMap.addEventListener('click', function (event) {
  // не только клик по пину, но и внутри него
  if (event.target.closest('.pin')) {
    showDialog(event);
  }
});

pinMap.addEventListener('keydown', function (event) {
  if (event.target.closest('.pin') && event.keyCode === ENTER_KEY_CODE) {
    showDialog(event);
  }
});

// закрытие диалогового окна
// по клику
dialogClose.addEventListener('click', function () {
  dialog.style.display = 'none';
});

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
time.addEventListener('change', function () {
  timeout.selectedIndex = time.selectedIndex;
});
timeout.addEventListener('change', function () {
  time.selectedIndex = timeout.selectedIndex;
});

// Значение поля «Тип жилья» синхронизировано с минимальной ценой
type.addEventListener('change', function () {
  if (type.selectedIndex === 0) {
    price.value = 1000;
    price.min = 1000;
  } else if (type.selectedIndex === 1) {
    price.value = 0;
    price.min = 0;
  } else {
    price.value = 10000;
    price.min = 10000;
  }
});

// Количество комнат связано с количеством гостей:
roomCapacity();
roomNumber.addEventListener('change', roomCapacity);
