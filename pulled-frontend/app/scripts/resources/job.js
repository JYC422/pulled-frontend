'use strict';

angular.module('pulledApp')
.factory('Job', ['$resource', 'API_URL', function($resource, API_URL){
  return $resource(API_URL + '/jobs/:id/', { id: '@id' },
    {
      deleteProduct: {
        method: 'DELETE',
        url: API_URL + '/jobs/:id/delete_product'
      },
      updateCart: {
        method: 'POST',
        url: API_URL + '/jobs/:id/manage_products'
      },
      getCart: {
        method: 'GET',
        url: API_URL + '/jobs/:id/order'
      },
    });
}]);
