'use strict';

//TODO, MODIFY API_URL ONCE BACKEND IMPLEMENTED
angular.module('pulledApp')
.factory('Cart', ['$resource', 'API_URL', function($resource, API_URL){
  return $resource(API_URL + '/cart/:id', { id: '@id', });
}]);
