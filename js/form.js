'use strict';
/*
var address = document.querySelector('#address');
var title = document.querySelector('#title'); // заголовок объявления

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

// торжество минимализма
window.initializePins(); // пины и диалог
window.synchronizeFields(time, timeout, timeArray, timeOutArray, 'value');
window.synchronizeFields(roomNumber, capacity, roomsArray, capacityArray, 'value');
window.synchronizeFields(formType, formPrice, propertyTypeArray, priceArray, 'min');

*/

window.initializePins(); // пины и диалог

window.synchronizeFields(time, timeout, ['12', '13', '14'], ['12', '13', '14'], 'value');

window.synchronizeFields(roomNumber, capacity, ['1', '2', '100'], ['0', '3', '3'], 'value');

window.synchronizeFields(type, price, ['1000', '0', '10000'], ['1000', '0', '10000'], 'min');

window.synchronizeFields(type, price, ['1000', '0', '10000'], ['1000', '0', '10000'], 'value');


