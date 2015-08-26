"use strict";

angular.module('pulledApp')
  .factory('InventoryService', ['Vendor', '$q', 'Session', function (Vendor, $q, Session) {

    var service = {};

    service.getInventory = function() {
      var defered= $q.defer();
      var promise= defered.promise;

      Vendor.inventory(function(data){
        defered.resolve(data.inventory);
      }, function(responseHeaders){
        console.log(responseHeaders);
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.updateProduct = function(product) {
      var defered= $q.defer();
      var promise= defered.promise;
       Vendor.updateVendorVariant({vvid: product.id, vendor_variant: product}, function(data){
        defered.resolve(data);
      }, function(responseHeaders){
        console.log(responseHeaders);
        defered.reject(responseHeaders);
      });

      return promise;
    };

    return service;

  }]);
