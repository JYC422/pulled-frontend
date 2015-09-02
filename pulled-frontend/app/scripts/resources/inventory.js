'use strict';

angular.module('pulledApp')
.factory('Vendor', ['$resource', 'API_URL', function($resource, API_URL){
  return $resource(API_URL + '/vendor_variants/:vvid', {vvid: '@vvid'},
   {
    inventory: {
      method: 'GET',
      url: API_URL + '/vendors/inventory'
    },
    updateVendorVariant: {
      method: 'PUT',
      url: API_URL + '/vendor_variants/:vvid'
    },
    createVendorVariant: {
      method: 'POST',
      url: API_URL + '/vendor_variants/'
    },
    deleteVendorVariant: {
      method: 'DELETE',
      url: API_URL + '/vendor_variants/:vvid'
    },

   });
}]);
