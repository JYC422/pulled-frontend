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

    return service;

  }]);
