'use strict';

angular.module('pulledApp')
  .controller('MultipleSearchCtrl', ['SearchService', '$scope', '$localStorage', function (SearchService, $scope, $localStorage) {

    $scope.showMore = function(parentIndex, index) {
      $scope.showMore[parentIndex][index].quantity = ($scope.showMore[parentIndex][index].quantity == 3) ? 100 : 3;
      $scope.showMore[parentIndex][index].mode = ($scope.showMore[parentIndex][index].mode == 'Hide') ? 'View All' : 'Hide';
      $scope.showMore[parentIndex][index].iconClass = ($scope.showMore[parentIndex][index].iconClass == 'fa-angle-double-down') ? 'fa-angle-double-up' : 'fa-angle-double-down';
    };

    var getSearchResults = function(pageNum) {
      SearchService.multipleSearch(pageNum).then(function(data){
        $scope.searchResults = data.products;
        $scope.priceFilter = angular.copy($localStorage.multipleSearchInfo.price);
      }, function(reason){
        console.log(reason);
      });
    };

    $scope.applyFilter = function() {
      $localStorage.multipleSearchInfo.price = $scope.priceFilter;
      getSearchResults();
    };

    getSearchResults();

}]);
