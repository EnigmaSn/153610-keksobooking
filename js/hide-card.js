'use strict';

(function () {
  window.hideCard = function () {
    var CLASS_INVISIBLE = 'invisible';
    var dialog = document.querySelector('.dialog');
    return function (cb, condition) {
      dialog.classList.add(CLASS_INVISIBLE);
      if (typeof cb === 'function' && condition) {
        cb();
      }
    };
  };
})();
