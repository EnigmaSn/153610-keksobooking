'use strict';

window.showCard = (function () {

  var ESCAPE_KEY_CODE = 27;

  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close'); // Закрытие карточки объявления

  var closeHandler = null;

  var showDialog = function (cb, data) {
    dialog.style.display = 'block'; // открыть окно диалог при нажатии на пин
    dialog.setAttribute('aria-hidden', false);
    dialogClose.focus(); // пересмотреть вебинар

    if (typeof cb === 'function') {
      closeHandler = cb;
    }

    if (data) {

      // функция вставляет в шаблон (который я пытаюсь сделать) текст
      (function (data) {
        dialog.querySelector('.dialog__title img').src = data.author.avatar;
        dialog.querySelector('.lodge__title').textContent = data.offer.title;
        dialog.querySelector('.lodge__address').textContent = data.offer.address;
        dialog.querySelector('.lodge__price').textContent = data.offer.price + '₽/ночь';
        dialog.querySelector('.lodge__type').textContent = type[data.offer.type];
        dialog.querySelector('.lodge__rooms-and-guests').textContent = data.offer.rooms + ' комнат для ' + data.offer.rooms + ' гостей';
        dialog.querySelector('.lodge__checkin-time').textContent = 'Заед после ' + data.offer.checkin + ' выезд до ' + data.offer.checkout;
        renderFeatures(data.offer.features);
        dialog.querySelector('.lodge__description').textContent = data.offer.description;
        renderPhotos(data.offer.photos);
      })();
    }
  };

  var escCloseDialog = function () {
    document.addEventListener('keydown', function (event) {
      if (event.keyCode === ESCAPE_KEY_CODE) {
        dialog.style.display = 'none';
        dialog.setAttribute('aria-hidden', true);

        closeHandler();
      }
    });
  };

  // закрытие диалогового окна
  escCloseDialog(); // закрывать диалог по esc
  dialogClose.addEventListener('click', function () {
    dialog.style.display = 'none';
    dialog.setAttribute('aria-hidden', true);
  });

  return showDialog;
})();
