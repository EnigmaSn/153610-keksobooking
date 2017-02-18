'use strict';

window.showCard = (function () {

  var ESCAPE_KEY_CODE = 27;

  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close'); // Закрытие карточки объявления

  var closeHandler = null;

  var showDialog = function (cb) {
    dialog.style.display = 'block'; // открыть окно диалог при нажатии на пин
    dialog.setAttribute('aria-hidden', false);
    dialogClose.focus(); // пересмотреть вебинар

    if (typeof cb === 'function') {
      closeHandler = cb;
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
