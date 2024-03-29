"use strict";

angular.module('pulledApp')
  .factory('CartService', ['Job', '$q', '$rootScope', 'JobService', function (Job, $q, $rootScope, JobService) {

    var service = {};

    service.getCart = function() {
      var defered= $q.defer();
      var promise= defered.promise;

      Job.getCart({id: JobService.getCurrentJob()},function(data){
        defered.resolve(data);
      }, function(responseHeaders){
        console.log(responseHeaders);
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.addToCart = function(lineItem) {
      var defered= $q.defer();
      var promise= defered.promise;
       Job.updateCart({id: JobService.getCurrentJob(),
                     line_items_attributes: lineItem},
        function(data){
        $rootScope.$broadcast('updateCart', data.current_order);
        defered.resolve(data);
      }, function(responseHeaders){
        console.log(responseHeaders);
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.removeLineItem = function(lineItemId) {
      var defered= $q.defer();
      var promise= defered.promise;
       Job.removeLineItem({id: JobService.getCurrentJob(),
                     line_item_id: lineItemId},
        function(data){
        $rootScope.$broadcast('updateCart', data.current_order);
        defered.resolve(data);
      }, function(responseHeaders){
        console.log(responseHeaders);
        defered.reject(responseHeaders);
      });

      return promise;
    };

    return service;

  }]);
