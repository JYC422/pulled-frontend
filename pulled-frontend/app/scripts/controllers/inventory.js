'use strict';

angular.module('pulledApp')
  .controller('InventoryCtrl', ['$scope', function ($scope) {

$scope.inventory = [{
  inventory: {  //not necessary
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
            unit: "dignissimos",
            img: "img/no-thumb.png",  //needed
            created_at: "20 JAN 2015 at 12:30 p.m.",  //needed
            last_modified: "20 FEB 2015 at 12:30 p.m."  //needed

          },
          {
            id: 2,
            stock: 7111,
            price: "426501.14",
            manufacturer: "Wyman Inc",
            vvid: "7285047871",
            sku: "8898434993",
            status: "inactive",
            unit: "dignissimos",
            img: "img/no-thumb.png",
            created_at: "20 JAN 2015 at 12:30 p.m.",
            last_modified: "20 FEB 2015 at 12:30 p.m."
          }]

      }]
  }
}]

}]);
