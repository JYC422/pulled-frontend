'use strict';

angular.module('pulledApp')
  .controller('SingleSearchCtrl', ['SearchService', '$scope', '$localStorage', function (SearchService, $scope, $localStorage) {

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

    var getSingleSearchResults = function(pageNum) {
      SearchService.singleSearch(pageNum).then(function(data){
        $scope.searchResults = data.vendor_variants;
        console.log(data);
        $scope.totalItemResults = data.total_products;
        $scope.currentPage = data.current_page;
        $scope.itemPerPage = 12;
        $scope.priceFilter = angular.copy($localStorage.searchInfo.price);
      }, function(reason){
        console.log(reason);
      });
    };

    $scope.sort = function() {
      $scope.reverseSort = sortOptions[$scope.orderValue].reverseSort;
      $scope.orderByField = sortOptions[$scope.orderValue].orderByField;
    };

    $scope.changePage = function() {
      $localStorage.searchInfo.page = $scope.currentPage;
      getSingleSearchResults();
    }

    $scope.applyFilter = function() {
      $localStorage.searchInfo.price = angular.copy($scope.priceFilter);
      getSingleSearchResults();
    }

    getSingleSearchResults();

}]);
