'use strict';

angular.module('pulledApp').
directive("multipleItemSearch", ['$rootScope', 'API_URL', '$localStorage', '$location', function($rootScope, API_URL, $localStorage, $location){
  return {
    restrict: "E",
    templateUrl: "views/search/multiple_item_search.html",
    scope: true,
    link: function(scope) {

      scope.autocompleteUrl = API_URL + '/products/autocomplete_search?page=' + 1 + '&q=';

      var newItem = function() {
        var item =  {
          product_info: undefined
        }
        return item;
      };

      scope.searchList = [newItem()];

      scope.addSearchItem = function() {
        scope.searchList.push(newItem());
      };

      scope.deleteSearchItem = function(item) {
        if (scope.searchList.length != 1) {
          var index = scope.searchList.indexOf(item);
          scope.searchList.splice(index, 1);
        }
      };

      scope.search = function() {
        var searchData = [];
        for (var i = 0; i < scope.searchList.length; i++) {
          searchData[i] = {
           product_id: scope.searchList[i].product_info.description.product_id,
           stock: scope.searchList[i].quantity
          }
        };
        $localStorage.multipleSearchInfo = searchData;

        if (angular.equals('/multiple_search_results', $location.path())) {
          $route.reload();
        } else {
          $location.path('/multiple_search_results');
        }
      };

    }
  };
}]);
