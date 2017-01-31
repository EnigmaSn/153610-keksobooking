'use strict';
// скрывашка
var dialog = document.querySelector('.dialog');
dialog.classList.add('invisible');
var invisible = document.querySelector('.invisible');
invisible.style.display = 'none';

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
      dialog.classList.remove('invisible'); // не работает(
    });
  })(i);
}

// Закрытие карточки объявления
var dialogClose = document.querySelector('.dialog__close');

dialog.classList.remove('invisible');

console.log(dialogClose);
dialogClose.addEventListener('click', function () {
  dialog.classList.add('invisible');
});
