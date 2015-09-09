'use strict';

angular.module('pulledApp').
  directive('onlyNumber', function() {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        setTimeout(function() {
          elem.on('keydown', "input[type='number']", function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            var keyCode = (window.event) ? e.which : e.keyCode;
            if ($.inArray(keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
               // Allow: Ctrl+A
              (keyCode == 65 && e.ctrlKey === true) ||
               // Allow: Ctrl+C
              (keyCode == 67 && e.ctrlKey === true) ||
               // Allow: Ctrl+X
              (keyCode == 88 && e.ctrlKey === true) ||
               // Allow: home, end, left, right
              (keyCode >= 35 && keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (keyCode < 48 || keyCode > 57)) && (keyCode < 96 || keyCode > 105)) {
              e.preventDefault();
            }
          });
        }, 1);
      }
    };
  });
