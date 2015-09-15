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
      angular.forEach($localStorage.multipleSearchInfo, function(value, index){
        value.price = angular.copy($localStorage.multipleSearchInfo.price);
      });

      Search.multipleSearch({items: $localStorage.multipleSearchInfo}, function(data){
        defered.resolve(data);
      }, function(responseHeaders){
        defered.reject(responseHeaders);
      });

      return promise;
    };

    return service;

  }]);
