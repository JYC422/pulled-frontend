"use strict";

angular.module('pulledApp')
  .factory('SearchService', ['Search', '$q', '$localStorage', function (Search, $q, $localStorage) {

    var service = {};

    service.singleSearch = function() {
      var defered= $q.defer();
      var promise= defered.promise;

      Search.singleSearch($localStorage.searchInfo, function(data){
        defered.resolve(data);
      }, function(responseHeaders){
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.multipleSearch = function() {
      var defered= $q.defer();
      var promise= defered.promise;

      //Add priceFilter to each product
      angular.forEach($localStorage.multipleSearchInfo, function(value){
        value.price = angular.copy($localStorage.multipleSearchInfo.price);
      });

      Search.multipleSearch({items: $localStorage.multipleSearchInfo}, function(data){
        defered.resolve(data);
      }, function(responseHeaders){
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.getStockSelectedMultipleSearch = function(indexCategory) {
      var productsStockSearched = $localStorage.multipleSearchInfo;
      if (productsStockSearched.length > 0 && productsStockSearched[indexCategory].hasOwnProperty('stock') && productsStockSearched[indexCategory].stock > 0) {
        return productsStockSearched[indexCategory].stock;
      }
      return 1;
    };

    service.getStockSelectedSingleSearch = function() {
      if ($localStorage.searchInfo.hasOwnProperty('stock') && $localStorage.searchInfo.stock > 0) {
        return $localStorage.searchInfo.stock;
      }
      return 1;
    }

    return service;

  }]);
