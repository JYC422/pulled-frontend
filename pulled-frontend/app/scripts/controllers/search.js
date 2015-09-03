'use strict';

angular.module('pulledApp')
  .controller('SearchCtrl', ['SearchService', '$scope', function (SearchService, $scope) {

    SearchService.singleSearch().then(function(data){
      $scope.searchResults = [data.vendor_variants[0], angular.copy(data.vendor_variants[0])];
    }, function(reason){
      console.log(reason);
    })

}]);
