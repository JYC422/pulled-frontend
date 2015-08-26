'use strict';

angular.module('pulledApp')
  .controller('MainCtrl', [ 'InventoryService', function (InventoryService) {

  InventoryService.getInventory().then(function(data){
    console.log(data);
  }, function(responseHeaders){
    console.log(responseHeaders);
  })

}]);
