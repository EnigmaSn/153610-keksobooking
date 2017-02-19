window.load = function (url, onload) {
  var xhr = new XMLHttpRequest();

  // Конфигурируем запрос: GET-запрос на URL
  // третий параметр - асинхронность (true по умолчанию)
  xhr.open('GET', 'url');

  // обработчик всегда до отправки запроса
  xhr.addEventListener('load', function(evt) {
    // onLoad — функция обратного вызова, которая срабатывает при успешном выполнении запроса. При вызове функции onLoad в её единственный параметр передается набор полученных данных.
    onLoad(evt.target.response);
  });

  if (xhr.status != 200) {
    console.log('Насяльнике, чет не так. Вот, сам посмотри: '+ xhr.status + ': ' + xhr.statusText);
  } else {
    console.log(xhr.responseText); // responseText -- текст ответа.
  }

  xhr.send(); // отправляем запрос
  // у GET запросов нет тела
};