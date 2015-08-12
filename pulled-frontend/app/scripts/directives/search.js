'use strict';

angular.module('pulledApp').
directive("search", function(){
    return {
        restrict: "EA",
        scope: false,
        templateUrl: "views/search.html"
    };
});
