'use strict';

angular.module('pulledApp').
directive("multipleItemSearch", function(){
  return {
    restrict: "E",
    templateUrl: "views/search/multiple_item_search.html",
    scope: true,
    link: function() {} // TODO, ADD MULTIPLE SEARCH FUNCTIONALLITY
  };
});
