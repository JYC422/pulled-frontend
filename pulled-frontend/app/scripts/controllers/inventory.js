'use strict';

angular.module('pulledApp')
  .controller('InventoryCtrl', ['$scope', function ($scope) {

$scope.inventory = [{
  inventory: {
    category: {
      id: 1,
      name: 'Beauty',
    },
    sub_categories: [
      {
        id: 1,
        name: 'Electronics',
        vendor_variants: [
          {
            id: 1,
            stock: 7111,
            price: "426501.14",
            manufacturer: "Wyman Inc",
            vvid: "7285047871",
            sku: "8898434993",
            status: "inactive",
            unit: "dignissimos"
          },
          {
            id: 2,
            stock: 7111,
            price: "426501.14",
            manufacturer: "Wyman Inc",
            vvid: "7285047871",
            sku: "8898434993",
            status: "inactive",
            unit: "dignissimos"
          }]

      }]
  }
}]

}]);
