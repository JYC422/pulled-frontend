'use strict';

angular.module('pulledApp').
directive('cart', ['$rootScope', 'Session', 'Validation', '$location', function($rootScope, Session, Validation, $location){
  return {
    templateUrl: 'views/cart.html',
    scope: true,
    link: function(scope) {

      $rootScope.$on('addToCart', function(event, cart) {
       $scope.cart = cart;
      });

    }
  };
}]);
