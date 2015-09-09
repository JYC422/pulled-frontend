'use strict';

angular.module('pulledApp')
  .controller('InventoryCtrl', ['$scope', '$rootScope', 'inventory', 'InventoryService', '$route', 'Validation', function ($scope, $rootScope, inventory, InventoryService, $route, Validation) {

  $scope.inventory = inventory;

  //TODO move this into directive
  $scope.orderByField = 'status';
  $scope.reverseSort = false;

  $scope.editProduct = function(product) {
    $scope.item = angular.copy(product);
    $scope.item.main_sub_category_id = $scope.item.main_sub_category.id;
    $scope.disableField = false;
  };

  $scope.newProduct = function() {
    $scope.item = newItem();
  };

  $scope.updateProduct = function(product) {
    InventoryService.updateProduct(product).then(function(){
      InventoryService.getInventory().then(function(inventory){
        $scope.inventory = inventory;
        $('#EditInventoryModal').modal('hide');
        toastr.success('Your product was succesfully updated', 'Update Success');
      });
    }, function(reason) {
      Validation.validate(reason);
    });
  };

  $scope.createProduct = function(product) {
    product.variant_id = product.id;
    InventoryService.createProduct(product).then(function(){
      InventoryService.getInventory().then(function(inventory){
        $scope.inventory = inventory;
        $('#NewInventoryModal').modal('hide');
        toastr.success('Your product was succesfully created', 'Creation Success');
      });
    }, function(reason) {
      Validation.validate(reason);
    });
  };

  $scope.deleteProduct = function(product) {
    InventoryService.deleteProduct(product).then(function(){
      InventoryService.getInventory().then(function(inventory){
        $scope.inventory = inventory;
        toastr.success('Your product  was succesfully removed from your inventory', 'Success');
      });
    }, function(reason) {
      Validation.validate(reason);
    });
  };

  var newItem = function() {
    return {
      variant_id: '',
      stock: 0,
      price: "",
      manufacturer: "",
      vvid: undefined,
      sku: "",
      status: "",
      unit: "",
      main_sub_category_id: { id: ''},
      units: [],
      sub_categories: []
    };
  };

}]);
