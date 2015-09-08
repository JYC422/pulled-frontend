'use strict';

angular.module('pulledApp').
directive("singleItemSearch", ['Session', '$location', 'Validation', 'API_URL', '$localStorage', function(Session, $location, Validation, API_URL, $localStorage){
  return {
    restrict: "EA",
    templateUrl: "views/search/single_search_bar.html",
    scope: true,
    link: function(scope) {

      scope.autocompleteUrl = API_URL + '/products/autocomplete_search?page=' + 1 + '&q=';

      scope.$watch('searchedProduct', function(newValue, oldValue){
        scope.disableField= !Boolean(scope.searchedProduct);
        if (scope.searchedProduct) {
          scope.item= scope.searchedProduct.description;
          console.log(scope.item);
        };
      }, true);

      scope.search = function() {
        $localStorage.searchInfo = {
          product_id: scope.item.product_id,
          stock: scope.quantity,
          unit: scope.unit,
          location: scope.location
        }
        $location.path('/search_results');
      };
    }
  };
}]);