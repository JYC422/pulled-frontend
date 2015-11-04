'use strict';

angular.module('pulledApp').
directive("singleItemSearch", ['Session', '$location', 'Validation', 'API_URL', '$localStorage', '$route', function(Session, $location, Validation, API_URL, $localStorage, $route){
  return {
    restrict: "EA",
    templateUrl: "views/search/single_search_bar.html",
    scope: true,
    link: function(scope) {

      scope.autocompleteUrl = API_URL + '/products/autocomplete_search?page=' + 1 + '&q=';

      scope.$watch('searchedProduct', function(){
        scope.disableField= !Boolean(scope.searchedProduct);
        if (scope.searchedProduct) {
          scope.item = scope.searchedProduct.originalObject;
        };
      }, true);

      scope.search = function() {
        $localStorage.searchInfo = {
          product_id: scope.item.product_id,
          stock: scope.quantity,
          unit: scope.unit,
          location: scope.location
        }
        if (angular.equals('/search_results', $location.path())) {
          $route.reload();
        } else {
          $location.path('/search_results');
        }
      };
    }
  };
}]);
