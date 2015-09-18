'use strict';

angular.module('pulledApp').
directive('cart', ['$rootScope', '$localStorage', 'Session', 'CartService', 'JobService', function($rootScope, $localStorage, Session, CartService, JobService){
  return {
    templateUrl: 'views/cart.html',
    scope: true,
    link: function(scope) {

      var getCart = function() {
        CartService.getCart().then(function(cart){
            scope.cart = cart.current_order;
            console.log(scope.cart);
          }, function(reason){
            console.log(reason);
        });
      };

      var initializeCart = function() {
        if ( !JobService.hasCurrentJob() ) {
          JobService.getJobs().then(function(data) {
            scope.jobs = data.jobs;
            $('#assign-job-modal').modal('show');
          }, function(reason) {
            console.log(reason);
          });
        } else {
          getCart();
        }
      };

      scope.saveJob = function () {
        JobService.saveCurrentJob(scope.selectedJob);
        getCart();
        $('#assign-job-modal').modal('hide');
      }

      initializeCart();

      $rootScope.$on('addToCart', function(event, cart) {
        scope.cart = cart;
      });

      $rootScope.$on('initializeCart', function() {
        initializeCart();
      });

    }
  };
}]);
