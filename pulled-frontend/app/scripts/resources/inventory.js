'use strict';

angular.module('pulledApp')
.factory('Inventory', ['$resource', 'API_URL', function($resource, API_URL){
  return $resource(API_URL + 'vendors/inventory', {}, {});
}]);
