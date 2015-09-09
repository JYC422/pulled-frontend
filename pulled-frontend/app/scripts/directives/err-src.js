'use strict';

angular.module('pulledApp').
directive("errSrc", function(){
  return {
    link: function(scope, element, attrs) {
      if (!attrs.ngSrc) {
        attrs.ngSrc = attrs.errSrc;
        attrs.$set('src', attrs.errSrc);
      }
    }
  };
});
