'use strict';

angular.module('pulledApp').
directive("quantityValidation", [ '$location', '$rootScope', function($location, $rootScope){
  return {
    restrict: "A",
    scope: false,
    link: function(scope, elem, attrs) {

      scope.validateQuantity= function(error) {
        console.log(elem);
        if (!$rootScope._.isEmpty(error)){
          elem.popover('show');
          elem.addClass('invalid-quantity');
        } else{
          elem.removeClass('invalid-quantity');
          elem.popover('hide');
        }
      }
    }
  };
}]);
