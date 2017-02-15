'use strict';
// Перепишите виджет synchronize-fields.js, связывающий поля между собой таким образом, чтобы логика изменения значения зависимого поля находилась в функции обратного вызова


window.synchronizeFields = function (source, target, array1, array2, callback) {

  var sync = function (cb) {
    var selectedVal = array1.indexOf(source.value); // индекс элемента массива 1, который выбран в данный момент
    // target[property] = array2[selectedVal];
    if (typeof cb === 'function') {
      cb(selectedVal);
    }
  };

  source.addEventListener('change', sync);

  // target.addEventListener('change', function (cb) {
  //   var selectedVal = array2.indexOf(target.value);
  //   if (typeof cb === 'function') {
  //     cb(selectedVal);
  //   };
  //   // source[property] = array1[selectedVal];
  // });

  sync();

  return sync;
};
