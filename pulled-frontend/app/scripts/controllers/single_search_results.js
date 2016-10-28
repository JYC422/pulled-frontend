'use strict';

angular.module('pulledApp')
  .controller('SingleSearchCtrl', ['SearchService', '$scope', '$localStorage', 'CartService', 'Validation', function (SearchService, $scope, $localStorage, CartService, Validation) {

    var getSingleSearchResults = function(pageNum) {
      SearchService.singleSearch(pageNum).then(function(data){
        $scope.searchResults = data.vendor_variants;
        $scope.totalItemResults = data.total_products;
        $scope.currentPage = data.current_page;
        $scope.itemPerPage = 12;
        $scope.priceFilter = angular.copy($localStorage.searchInfo.price);
        $scope.stockRequested = SearchService.getStockSelectedSingleSearch();
      }, function(reason){
        console.log(reason);
      });
    };

    $scope.changePage = function() {
      $localStorage.searchInfo.page = $scope.currentPage;
      getSingleSearchResults();
    };

    $scope.addToCart = function(item) {
      var lineItem = {
        vendor_variant_id: item.id,
        quantity: item.quantity
      };
      CartService.addToCart([lineItem]).then(function(){
        toastr.success('Your product was succesfully added to cart', 'Product added');
      }, function(reason){
        //TODO ADD NECESSARY VALIDATIONS TO ValidationService
        Validation.validate(reason);
      });
    };

    $scope.applyFilter = function() {
      $localStorage.searchInfo.price = angular.copy($scope.priceFilter);
      getSingleSearchResults();
    };

    getSingleSearchResults();

}]);
