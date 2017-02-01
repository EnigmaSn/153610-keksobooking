'use strict';
// скрывашка
var dialog = document.querySelector('.dialog');
dialog.style.display = 'none';

// пины
var pin = document.querySelectorAll('.pin');
var pinActive = document.querySelector('.pin--active');

// клики по пинам
// значение function(n) объявляется – и тут же выполняется, т.е. n = i.
// Так как function(n) тут же завершается, то значение x больше не меняется. Оно и будет использовано в возвращаемой функции-стрелке.
for (var i = 0; i < pin.length; i++) {
  (function (n) {
    pin[n].addEventListener('click', function () {
      pinActive.classList.remove('pin--active');
      pinActive = pin[n];
      pin[n].classList.add('pin--active');

      // открыть окно диалог при нажатии на пин
      dialog.style.display = 'block';
    });
  })(i);
}

// Закрытие карточки объявления
var dialogClose = document.querySelector('.dialog__close');

dialogClose.addEventListener('click', function () {
  dialog.style.display = 'none';
});

// Проверка правильности введенных данных
// Заголовок объявления:
var title = document.querySelector('#title');

title.required = true;
title.minLength = 30;
title.maxLength = 100;

// Цена за ночь
var price = document.querySelector('#price');

price.required = true;
price.pattern = '^[ 0-9]+$'; // только цифры
price.minLength = 1000;
price.maxLength = 1000000;

// Адрес
var address = document.querySelector('#address');

address.required = true;

// Поля «время заезда» и «время выезда» синхронизированы — при изменении значения одного поля, во втором выделяется соответствующее ему (например, если время заезда указано «после 14», то время выезда будет равно «до 14»)

var time = document.querySelector('#time');
var timeout = document.querySelector('#timeout');

time.addEventListener('change', function () {
  timeout.selectedIndex = time.selectedIndex;
});
timeout.addEventListener('change', function () {
  time.selectedIndex = timeout.selectedIndex;
});
