"use strict";

angular.module('pulledApp')
  .factory('CartService', ['Cart', '$q', '$rootScope', function (Cart, $q, $rootScope) {

    var service = {};

    service.getCart = function() {
      var defered= $q.defer();
      var promise= defered.promise;

      Cart.get(function(data){
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
