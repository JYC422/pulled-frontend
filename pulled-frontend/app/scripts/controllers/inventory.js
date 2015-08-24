'use strict';

angular.module('pulledApp')
  .controller('InventoryCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

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
              status: "Inactive",
              unit: "Unit 1",
              img: "img/invoice_details_1.png",  //needed
              created_at: "20 JAN 2015 at 12:30 p.m.",  //needed
              last_modified: "20 FEB 2015 at 12:30 p.m.",  //needed
              category: "Irrigation",
              main_subcategory: {name:'SubCategory 3', id: '3'}, //needed
              possible_units: ['Unit 1', 'Unit 2', 'Unit 3'],
              sub_categories: [{name:'SubCategory 1', id: '1'}, {name:'SubCategory 2', id: '2'}, {name:'SubCategory 3', id: '3'}] //needed

            },
            {
              id: 2,
              stock: 7111,
              price: "426501.14",
              manufacturer: "Wyman Inc",
              vvid: "7285047871",
              sku: "8898434993",
              status: "Active",
              unit: "Unit 1",
              img: "img/invoice_details_1.png",  //needed
              created_at: "20 JAN 2015 at 12:30 p.m.",  //needed
              last_modified: "20 FEB 2015 at 12:30 p.m.",  //needed
              category: "Irrigation",
              main_subcategory: {name:'SubCategory 3', id: '3'}, //needed
              possible_units: ['Unit 1', 'Unit 2', 'Unit 3'],
              sub_categories: [{name:'SubCategory 1', id: '1'}, {name:'SubCategory 2', id: '2'}, {name:'SubCategory 3', id: '3'}] //needed
            }]

        }]
    }
  }];


 /*{
 "category"=>{
   "id"=>1,
   "name"=>"Baby"
 },
 "sub_categories"=>[
   {
     "sub_category"=>{
       "id"=>1,
       "name"=>"Games"
     },
     "vendor_variants"=>[
       {
         "id"=>2,
         "stock"=>4268,
         "price"=>"580164.37",
         "manufacturer"=>"Hansen Inc",
         "vvid"=>"3668141151",
         "sku"=>"5621745262",
         "status"=>"active",
         "unit"=>"quam",
         "created_at"=>"2015-08-24T17:28:04.355Z",
         "updated_at"=>"2015-08-24T17:28:04.355Z",
         "main_sub_category"=>{
           "id"=>1,
           "name"=>"Games"
         },
         "sub_categories"=>[
           {
             "id"=>1,
             "name"=>"Games"
           },
           {
             "id"=>2,
             "name"=>"Tools"
           }
         ],
         "units"=>[
           "quia",
           "magni",
           "quam"
         ],
         "statuses"=>{
           "active"=>0,
           "inactive"=>1
         }
       }
     ]
   },
   {
     "sub_category"=>{
       "id"=>2,
       "name"=>"Tools"
     },
     "vendor_variants"=>[
       {
         "id"=>1,
         "stock"=>6417,
         "price"=>"241229.24",
         "manufacturer"=>"Pacocha-Kautzer",
         "vvid"=>"8910887838",
         "sku"=>"9256616958",
         "status"=>"active",
         "unit"=>"magni",
         "created_at"=>"2015-08-24T17:28:04.344Z",
         "updated_at"=>"2015-08-24T17:28:04.344Z",
         "main_sub_category"=>{
           "id"=>2,
           "name"=>"Tools"
         },
         "sub_categories"=>[
           {
             "id"=>1,
             "name"=>"Games"
           },
           {
             "id"=>2,
             "name"=>"Tools"
           }
         ],
         "units"=>[
           "quia",
           "magni",
           "quam"
         ],
         "statuses"=>{
           "active"=>0,
           "inactive"=>1
         }
       }
     ]
   }
 ]
}*/

  $scope.editProduct = function(product) {
    $scope.item = product;
    $scope.disableSearch = true;
    $scope.modalTitle = 'EDIT ITEM';
  };

  $scope.newProduct = function() {
    $scope.item = newItem();
    $scope.disableSearch = false;
    $scope.modalTitle = 'NEW ITEM';
  };

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
      img: "img/no-thumb.png",  //needed
      created_at: "",  //needed
      last_modified: "",  //needed
      category: "No category Selected",
      main_subcategory: {name: '', id: ''}, //needed
      possible_units: [],
      sub_categories: []
    }
  }

}]);
