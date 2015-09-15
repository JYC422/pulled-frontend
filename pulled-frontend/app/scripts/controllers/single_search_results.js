'use strict';

angular.module('pulledApp')
  .controller('SingleSearchCtrl', ['SearchService', '$scope', '$localStorage', function (SearchService, $scope, $localStorage) {


    var getSingleSearchResults = function(pageNum) {
      SearchService.singleSearch(pageNum).then(function(data){
        $scope.searchResults = data.vendor_variants;
        $scope.totalItemResults = data.total_products;
        $scope.currentPage = data.current_page;
        $scope.itemPerPage = 12;
        $scope.priceFilter = angular.copy($localStorage.searchInfo.price);
      }, function(reason){
        console.log(reason);
      });
    };

    $scope.changePage = function() {
      $localStorage.searchInfo.page = $scope.currentPage;
      getSingleSearchResults();
    };

    $scope.applyFilter = function() {
      $localStorage.searchInfo.price = angular.copy($scope.priceFilter);
      getSingleSearchResults();
    };

    getSingleSearchResults();

}]);
