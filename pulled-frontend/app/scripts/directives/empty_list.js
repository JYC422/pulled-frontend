'use strict';

angular.module('pulledApp').
directive("emptyList", [ '$location', '$rootScope', 'Session', function($location, $rootScope, Session){
  return {
    restrict: "E",
    template: '<h4 class="empty-inventory" ng-show="emptyInventory">No products on your inventory, <a href="" ng-click="newProduct()" data-target="#NewInventoryModal" data-toggle="modal">Add one</a></h4>',
    scope: false,
    link: function(scope) {

      scope.$watch('inventory', function(newValue, oldValue){
        scope.emptyInventory = Boolean(scope.inventory) && $rootScope._.isEmpty(scope.inventory); ;
        console.log(scope.emptyInventory);
      }, true);

    }
  };
}]);
