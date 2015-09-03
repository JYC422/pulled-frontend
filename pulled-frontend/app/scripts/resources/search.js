'use strict';

angular.module('pulledApp')
.factory('Search', ['$resource', 'API_URL', function($resource, API_URL){
  return $resource(API_URL + 'vendor_variants/single_item_search/:id', { id: '@id' },
    {
      singleSearch: {
        method: 'GET',
        url: API_URL + '/vendor_variants/single_item_search'
      }
    });
}]);
