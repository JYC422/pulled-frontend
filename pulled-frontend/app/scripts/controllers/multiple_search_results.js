'use strict';

angular.module('pulledApp')
  .controller('MultipleSearchCtrl', ['SearchService', '$scope', '$localStorage', '$filter', function (SearchService, $scope, $localStorage, $filter) {

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

    $scope.applyFilter = function() {
      $localStorage.multipleSearchInfo.price = $scope.priceFilter;
      getSearchResults();
    };

    $scope.changePage = function(id, nextPage) {
      var product = $filter('filter')($localStorage.multipleSearchInfo, {product_id: id});
      product[0].page = nextPage;
      getSearchResults();
    };

    getSearchResults();

}]);
