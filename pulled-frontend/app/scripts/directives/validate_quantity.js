'use strict';

angular.module('pulledApp').
directive("validateQuantity", ['Session', '$location', 'Validation', 'API_URL', '$localStorage', function(Session, $location, Validation, API_URL, $localStorage){
  return {
    restrict: "A",

    scope: false,
    link: function(scope, elem, attrs) {

      scope.validateProduct = function (quantity, isSelected) {
        return isSelected &&  !Boolean(quantity);
      }

    }
  };
}]);
