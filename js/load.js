window.load = function () {
  var xhr = new XMLHttpRequest();

  // Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('GET', 'file.json');
  xhr.send();

  if (xhr.status != 200) {
    alert ('Алярм, там ошибка, хозяин!');
  } else {
    alert( xhr.responseText ); // responseText -- текст ответа.
  }
};