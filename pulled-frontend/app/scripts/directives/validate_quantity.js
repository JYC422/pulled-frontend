'use strict';

angular.module('pulledApp').
directive("validateQuantity", function(){
  return {
    restrict: "A",

    scope: false,
    link: function(scope) {

      scope.validateProduct = function (quantity, isSelected) {
        return isSelected &&  !Boolean(quantity);
      };

    }
  };
});
