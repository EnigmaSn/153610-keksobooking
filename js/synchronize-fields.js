'use strict';

(function () {
  window.synchronizeFields = function (source, target, array1, array2, cb) {

    var sync = function () {
      var selectedValIndex = array1.indexOf(source.value); // индекс элемента массива 1, который выбран в данный момент
      var selectedVal = array2[selectedValIndex];
      cb(selectedVal);
    };

    sync();

    source.addEventListener('change', sync);
  };
})();
