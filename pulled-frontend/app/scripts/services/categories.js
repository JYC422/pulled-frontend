"use strict";

angular.module('pulledApp')
  .factory('CategoriesService', ['Categories', '$q', function (Categories, $q) {

    var service = {};

    service.getCategories = function() {
      var defered= $q.defer();
      var promise= defered.promise;

      Categories.get(function(data){
        defered.resolve(data.categories);
      }, function(responseHeaders){
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.getSubCategories = function(categoryId) {
      var defered= $q.defer();
      var promise= defered.promise;

      Categories.subCategories({id: categoryId}, function(data){
        defered.resolve(data.sub_categories);
      }, function(responseHeaders){
        defered.reject(responseHeaders);
      });

      return promise;
    };

    return service;

  }]);
