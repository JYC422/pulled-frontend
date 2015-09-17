'use strict';

angular.module('pulledApp').
directive('cart', ['$rootScope', function($rootScope){
  return {
    templateUrl: 'views/cart.html',
    scope: true,
    link: function(scope) {

      $rootScope.$on('addToCart', function(event, cart) {
        scope.cart = cart;
      });

    }
  };
}]);
