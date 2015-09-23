'use strict';

angular.module('pulledApp').
directive('cart', ['$rootScope', '$localStorage', 'Session', 'CartService', 'JobService', function($rootScope, $localStorage, Session, CartService, JobService){
  return {
    templateUrl: 'views/cart.html',
    scope: false,
    link: function(scope) {

      scope.jobMode = 'selection';
      scope.options = {
        country: 'us'
      };

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
            $('#assign-job-modal').modal({backdrop: 'static', keyboard: false});
          }, function(reason) {
            console.log(reason);
          });
        } else {
          getCart();
        }
      };

       var setAddressAttributes = function(addr) {
        return {
          street_address: addr.street_number + ' ' + addr.route,
          secondary_address: addr.secondary_address,
          zip: addr.postal_code,
          state: addr.administrative_area_level_1,
          city: addr.locality
        }
      };

      scope.removeProduct = function(lineItem) {
        CartService.removeLineItem(lineItem.id).then(function(){
          toastr.success('Your product was succesfully deleted from cart', 'Product deleted');
        }, function(reason) {
          console.log(reason);
          //TODO: ADD VALIDATIONS
        })
      };

      scope.isEmptyCart = function() {
        return (scope.cart) && ($rootScope._.isEmpty(scope.cart.vendors));
      }

      scope.isNewJobMode = function() {
       return angular.equals(scope.jobMode, 'new');
      }

      scope.saveJob = function () {
        if (scope.isNewJobMode()) {

          var address = {
            name: scope.jobName,
            job_address_attributes: setAddressAttributes(scope.details.jobAddress),
            shipping_address_attributes: setAddressAttributes(scope.details.shippingAddress)
          }

          JobService.createJob({job: address}).then(function(data) {
            getCart();
          }, function(reason) {
            console.log(reason);
          })
        } else {
          JobService.saveCurrentJob(scope.selectedJob)
          getCart();
        }
        $('#assign-job-modal').modal('hide');
      };

      scope.toggleJobAssign = function() {
        scope.jobMode = (angular.equals(scope.jobMode, 'selection')) ? 'new' : 'selection';
      };

      Session.hasCurrentUser() && initializeCart();

      $rootScope.$on('updateCart', function(event, cart) {
        scope.cart = cart;
      });

      $rootScope.$on('initializeCart', function() {
        initializeCart();
      });

    }
  };
}]);
