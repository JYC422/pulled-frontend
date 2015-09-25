'use strict';

angular.module('pulledApp').
  directive('disableEnter', function() {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('keyup keypress', function(e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
          e.preventDefault();
          return false;
        }
      });
      }
    };
  });
