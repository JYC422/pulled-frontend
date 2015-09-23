'use strict';

angular.module('pulledApp')
.factory('Job', ['$resource', 'API_URL', function($resource, API_URL){
  return $resource(API_URL + '/jobs/:id/', { id: '@id' },
    {
      removeLineItem: {
        method: 'DELETE',
        url: API_URL + '/jobs/:id/delete_product'
      },
      updateCartProduct: {
        method: 'PUT',
        url: API_URL + '/jobs/:id/update_product'
      },
      addToCart: {
        method: 'POST',
        url: API_URL + '/jobs/:id/create_product'
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
