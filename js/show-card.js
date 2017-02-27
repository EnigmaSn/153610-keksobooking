'use strict';

(function () {

  var ESCAPE_KEY_CODE = 27;

  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close'); // Закрытие карточки объявления

  var closeHandler = null;

  // пробегаемся по массиву features и добавляем картинки в поле контейнер
  var renderFeatures = function (features) {
    var featuresContainer = dialog.querySelector('.lodge__features');
    featuresContainer.innerHTML = ''; // чистим контейнер

    var featuresFragment = document.createDocumentFragment();

    for (var i = 0; i < features.length; i++) {
      var newSpan = document.createElement('span'); // новый элемент-контейнер, в котором будет иконка
      newSpan.classList.add('feature__image');
      newSpan.classList.add('feature__image--' + features[i]); // иконка

      featuresFragment.appendChild(newSpan);
    }
    featuresContainer.appendChild(featuresFragment);
  };

  var renderPhotos = function (photos) {
    var photosContainer = dialog.querySelector('.lodge__photos');
    photosContainer.innerHTML = '';
    var newPhotoWidth = 52;
    var newPhotoHeight = 42;

    var photosFragment = document.createDocumentFragment();

    for (var i = 0; i < photos.length; i++) {
      var newPhoto = document.createElement('img');
      newPhoto.src = photos[i];
      newPhoto.setAttribute('alt', 'Lodge photo');
      newPhoto.setAttribute('width', newPhotoWidth);
      newPhoto.setAttribute('height', newPhotoHeight);

      photosFragment.appendChild(newPhoto);
    }
    photosContainer.appendChild(photosFragment);
  };

  var renderDialog = function (data) {
    dialog.querySelector('.dialog__title img').src = data.author.avatar;
    dialog.querySelector('.lodge__title').textContent = data.offer.title;
    dialog.querySelector('.lodge__address').textContent = data.offer.address;
    dialog.querySelector('.lodge__price').textContent = data.offer.price + '₽/ночь';
    dialog.querySelector('.lodge__type').textContent = data.offer.type[data.offer.type];
    dialog.querySelector('.lodge__rooms-and-guests').textContent = data.offer.rooms + ' комнат для ' + data.offer.rooms + ' гостей';
    dialog.querySelector('.lodge__checkin-time').textContent = 'Заед после ' + data.offer.checkin + ' выезд до ' + data.offer.checkout;
    dialog.querySelector('.lodge__description').textContent = data.offer.description;
    renderFeatures(data.offer.features);
    renderPhotos(data.offer.photos);
  };

  var showDialog = function (cb, data) {
    dialog.style.display = 'block'; // открыть окно диалог при нажатии на пин
    dialog.setAttribute('aria-hidden', false);
    dialogClose.focus(); // пересмотреть вебинар

    if (typeof cb === 'function') {
      closeHandler = cb;
    }

    renderDialog(data);
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

  window.showCard = showDialog;
})();
