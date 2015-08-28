'use strict';

angular.module('pulledApp')
  .controller('InventoryCtrl', ['$scope', '$rootScope', 'inventory', 'InventoryService', '$route', 'Validation', function ($scope, $rootScope, inventory, InventoryService, $route, Validation) {

  $scope.inventory = inventory;

  //TODO move this into directive
  $scope.orderByField = 'status';
  $scope.reverseSort = false;

  $scope.variants = {
    'Red Maple': 2,
    'Norway Maple': 8
  }

  $scope.editProduct = function(product) {
    $scope.item = angular.copy(product);
    $scope.item.main_sub_category_id = $scope.item.main_sub_category.id;
    $scope.disableField = false;
    console.log($scope.disableField);
  };

  $scope.newProduct = function() {
    $scope.item = newItem();
  };

  $scope.$watch('item', function(newValue, oldValue){
   console.log($scope.item);
  }, true);

  $scope.updateProduct = function(product) {
    InventoryService.updateProduct(product).then(function(data){
      InventoryService.getInventory().then(function(inventory){
        $scope.inventory = inventory;
        $('#EditInventoryModal').modal('hide');
        toastr.success('Your product was succesfully updated', 'Update Success');
      })
    }, function(reason) {
      console.log(reason);
      Validation.validate(reason);
    })
  }

  $scope.createProduct = function(product) {
    product.variant_id = product.id
    InventoryService.createProduct(product).then(function(data){
      InventoryService.getInventory().then(function(inventory){
        $scope.inventory = inventory;
        $('#NewInventoryModal').modal('hide');
        toastr.success('Your product was succesfully created', 'Creation Success');
      })
    })
  }

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
    }
  }

}]);
