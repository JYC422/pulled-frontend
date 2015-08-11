'use strict';

angular.module('pulledApp').
directive('login', function(){
  return {
    link: function(scope, elem, attr, controller) {
      scope.isCollapsed = true;  
      elem.click(function(){
        scope.isCollapsed = !scope.isCollapsed;
        scope.$apply();
      });
    }
  }
})
