'use strict';

angular.module('pulledApp')
  .controller('InventoryCtrl', ['$scope', '$rootScope', 'inventory', 'InventoryService', function ($scope, $rootScope, inventory, InventoryService) {

  $scope.inventory = inventory;

  $scope.editProduct = function(product) {
    $scope.item = angular.copy(product);
    $scope.editingProduct = product;
    $scope.disableSearch = true;
    $scope.modalTitle = 'EDIT ITEM';
  };

  $scope.newProduct = function() {
    $scope.item = newItem();
    $scope.disableSearch = false;
    $scope.modalTitle = 'NEW ITEM';
  };

  $scope.updateProduct = function(product) {
    InventoryService.updateProduct(product).then(function(data){
      console.log($scope.editingProduct);
      angular.extend($scope.editingProduct, $scope.item);
      console.log($scope.editingProduct);
      toastr.success('Your product was succesfully updated', 'Update Success');
    })
  }

  $scope.getSubCategories = function(pr) {
    if (pr) {
     return $rootScope._.pluck(pr.sub_categories, 'name').join(',');
    }
  };

  var newItem = function() {
    return {
      id: '',
      stock: 0,
      price: "",
      manufacturer: "",
      vvid: "",
      sku: "",
      status: "",
      unit: "",
      created_at: "",  //needed
      last_modified: "",  //needed
      category: {name: 'No category Selected'},
      main_subcategory: {name: '', id: ''}, //needed
      possible_units: [],
      sub_categories: []
    }
  }

}]);
