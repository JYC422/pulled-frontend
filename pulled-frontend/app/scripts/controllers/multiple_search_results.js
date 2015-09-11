'use strict';

angular.module('pulledApp')
  .controller('MultipleSearchCtrl', ['SearchService', '$scope', '$localStorage', function (SearchService, $scope, $localStorage) {

    var sortOptions = {
      PriceLow: {
        reverseSort: false,
        orderByField: 'price',
      },
      PriceHigh: {
        reverseSort: true,
        orderByField: 'price',
      },
      ManuFacturerAsc: {
        reverseSort: false,
        orderByField: 'manufacturer',
      },
      ManuFacturerDsc: {
        reverseSort: true,
        orderByField: 'manufacturer',
      },
      StockAsc: {
        reverseSort: false,
        orderByField: 'stock',
      },
      StockDsc: {
        reverseSort: true,
        orderByField: 'stock',
      }
    };


    $scope.showMore = function(parentIndex, index) {
      $scope.showMore[parentIndex][index].quantity = ($scope.showMore[parentIndex][index].quantity == 3) ? 100 : 3;
      $scope.showMore[parentIndex][index].mode = ($scope.showMore[parentIndex][index].mode == 'Hide') ? 'View All' : 'Hide';
      $scope.showMore[parentIndex][index].iconClass = ($scope.showMore[parentIndex][index].iconClass == 'fa-angle-double-down') ? 'fa-angle-double-up' : 'fa-angle-double-down';
    }

    var getSearchResults = function(pageNum) {
      SearchService.multipleSearch(pageNum).then(function(data){
        $scope.searchResults = data.products;
        // $scope.totalItemResults = data.total_products;
        // $scope.currentPage = data.current_page;
        console.log(data);
      }, function(reason){
        console.log(reason);
      });
    };

    $scope.sort = function() {
      $scope.reverseSort = sortOptions[$scope.orderValue].reverseSort;
      $scope.orderByField = sortOptions[$scope.orderValue].orderByField;
    };

    getSearchResults();

}]);
