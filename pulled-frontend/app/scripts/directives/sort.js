'use strict';

angular.module('pulledApp').
directive("sortProducts", function(){
  return {
    restrict: "E",
    templateUrl: "views/sort.html",
    scope: false,

    link: function(scope) {


      var sortOptions = {
        PriceLow: {
          reverseSort: false,
          orderByField: 'price',
        },
        PriceHigh: {
          reverseSort: true,
          orderByField: 'price',
        },
        ManuFacturerAsc: {
          reverseSort: false,
          orderByField: 'manufacturer',
        },
        ManuFacturerDsc: {
          reverseSort: true,
          orderByField: 'manufacturer',
        },
        StockAsc: {
          reverseSort: false,
          orderByField: 'stock',
        },
        StockDsc: {
          reverseSort: true,
          orderByField: 'stock',
        }
      };

      scope.sort = function() {
        scope.reverseSort = sortOptions[scope.orderValue].reverseSort;
        scope.orderByField = sortOptions[scope.orderValue].orderByField;
      };

    }
  };
});
