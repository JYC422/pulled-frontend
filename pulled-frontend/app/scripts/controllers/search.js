'use strict';

angular.module('pulledApp')
  .controller('SearchCtrl', ['SearchService', '$scope', '$localStorage', function (SearchService, $scope, $localStorage) {


    var getSingleSearchResults = function(pageNum) {
      SearchService.singleSearch(pageNum).then(function(data){
        $scope.searchResults = data.vendor_variants;
        console.log(data);
      }, function(reason){
        console.log(reason);
      })
    }

    $scope.pageChanged = function() {
      $localStorage.searchInfo.page = $scope.currentPage;
      getSingleSearchResults($scope.currentPage);
    }

    $scope.currentPage = ($localStorage.searchInfo) ? $localStorage.searchInfo.page : 1;
    getSingleSearchResults();

}]);
