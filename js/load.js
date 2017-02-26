'use strict';

(function () {
  window.load = function (url, onLoad) {
    var xhr = new XMLHttpRequest();

    // Конфигурируем запрос: GET-запрос на URL
    // третий параметр - асинхронность (true по умолчанию)
    xhr.open('GET', url);

    // обработчик всегда до отправки запроса
    xhr.addEventListener('load', function (event) {
      // onLoad — функция обратного вызова, которая срабатывает при успешном выполнении запроса. При вызове функции onLoad в её единственный параметр передается набор полученных данных.
      if (event.target.status === 200) {
        var data = JSON.parse(event.target.response);
        onLoad(data);
      }
    });

    xhr.send(); // отправляем запрос
    // у GET запросов нет тела
  };
})();
