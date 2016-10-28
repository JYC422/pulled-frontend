'use strict';

angular.module('pulledApp')
  .controller('MultipleSearchCtrl', ['SearchService', '$scope', '$localStorage', '$filter', 'CartService', function (SearchService, $scope, $localStorage, $filter, CartService) {

    $scope.showMore = function(parentIndex, index) {
      $scope.showMore[parentIndex][index].quantity = (angular.equals($scope.showMore[parentIndex][index].quantity, undefined) || angular.equals($scope.showMore[parentIndex][index].quantity, 3)) ? 100 : 3;
      $scope.showMore[parentIndex][index].mode = ($scope.showMore[parentIndex][index].mode == 'Hide') ? 'View All' : 'Hide';
      $scope.showMore[parentIndex][index].iconClass = ($scope.showMore[parentIndex][index].iconClass == 'fa-angle-double-down') ? 'fa-angle-double-up' : 'fa-angle-double-down';
    };

    var getSearchResults = function(pageNum) {
      SearchService.multipleSearch(pageNum).then(function(data) {
        $scope.itemPerPage = 5;
        $scope.searchResults = data.products;
        $scope.priceFilter = angular.copy($localStorage.multipleSearchInfo.price);
        console.log($scope.searchResults);
      }, function(reason){
        console.log(reason);
      });
    };

    $scope.getStockSelected = function(indexCategory) {
      return SearchService.getStockSelectedMultipleSearch(indexCategory);
    }

    $scope.applyFilter = function() {
      $localStorage.multipleSearchInfo.price = $scope.priceFilter;
      getSearchResults();
    };

    $scope.changePage = function(id, nextPage) {
      var product = $filter('filter')($localStorage.multipleSearchInfo, {product_id: id});
      product[0].page = nextPage;
      getSearchResults();
    };

    $scope.addToCart = function(items) {
      var lineItems = [];
      for (var i = items.length - 1; i >= 0; i--) {
        if (items[i].selected) {
          console.log(items[i]);
          var lineItem = {
            vendor_variant_id :items[i].id,
            quantity: items[i].quantity
          };
          lineItems.push(lineItem);
        }
      }
      if (lineItems.length !== 0) {
        CartService.addToCart(lineItems).then(function() {
          toastr.success('Your products were succesfully added to cart', 'Products added');
        }, function(reason) {
          //TODO ADD NECESSARY VALIDATIONS TO ValidationService
          console.log(reason);
        });
      }
    };

    getSearchResults();

}]);
