'use strict';

angular.module('pulledApp')
.factory('Categories', ['$resource', 'API_URL', function($resource, API_URL){
  return $resource(API_URL + '/categories/:id', { id: '@id' },
    {
      subCategories: {
        method: 'GET',
        url: API_URL + '/categories/sign_out'
      }
    });
}]);
