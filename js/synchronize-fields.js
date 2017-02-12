'use strict';

window.synchronizeFields = (function (source, target, array1, array2, property) {

  var sync = function () {
    var selectedVal = array1.indexOf(source.value);
    target[property] = array2[selectedVal];
  };

  source.addEventListener('change', sync);

  target.addEventListener('change', function () {
    var selectedVal = array2.indexOf(target.value);
    source[property] = array1[selectedVal];
  });

  sync();
})();
