'use strict';

angular.module('pulledApp').
directive("fixedHeader", [ '$rootScope', '$location', function($rootScope, $location){
  return {
    restrict: "A",
    link: function(scope) {

      var setFixedHeader = function(header) {
        header.removeClass("not-transparent");
        $(".navbar-brand").attr("src","images/pulled-logo-white.png");
        $(".navbar-nav").removeClass("black");
        header.css('position', 'fixed');
      }

      var setStaticHeader = function(header) {
        header.css('position', 'static');
        header.addClass("not-transparent");
        $(".navbar-brand").attr("src","images/pulled-logo.png");
        $(".navbar-nav").addClass("black");
      }

      var header = $("#landing-header");
      if (angular.equals($location.path(), '/')) {
        setFixedHeader(header);
      } else{
        setStaticHeader(header);
      };

      $rootScope.$on('$routeChangeStart', function (event, next) {
        var nextPath = next.$$route.originalPath;
        if (angular.equals(nextPath, '/')) {
          setFixedHeader(header);
        } else{
          console.log(header);
          setStaticHeader(header);
        }
      });

    }
  };
}]);
