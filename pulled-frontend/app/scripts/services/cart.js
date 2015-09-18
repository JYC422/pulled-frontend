"use strict";

angular.module('pulledApp')
  .factory('CartService', ['Job', '$q', '$rootScope', function (Job, $q, $rootScope) {

    var service = {};

    service.getCart = function(jobId) {
      var defered= $q.defer();
      var promise= defered.promise;

      Job.getCart({id: 3},function(data){
        defered.resolve(data);
      }, function(responseHeaders){
        console.log(responseHeaders);
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.updateCart = function(updatedCart) {
      var defered= $q.defer();
      var promise= defered.promise;
      //TODO, SEND NECESSARY DATA ONCE BACKEND IMPLEMENTED
       Cart.save({cart: updatedCart}, function(data){
        $rootScope.$broadcast('addToCart', data.cart);
        defered.resolve(data);
      }, function(responseHeaders){
        console.log(responseHeaders);
        defered.reject(responseHeaders);
      });

      return promise;
    };

    return service;

  }]);
