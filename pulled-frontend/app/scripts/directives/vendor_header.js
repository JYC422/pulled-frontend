'use strict';

angular.module('pulledApp').
directive("vendorHeader", [ '$location', '$rootScope', 'Session', function($location, $rootScope, Session){
  return {
    restrict: "EA",
    templateUrl: "views/vendor/vendor_header.html",
    scope: true,
    link: function(scope) {

      scope.$watch(function(){return $location.path()}, function(value){
        $(".vendor-header-item").removeClass('active');
        $('.vendor-header').find('a[href="/#' + value + '"]').find('.vendor-header-item').addClass('active');
      }, true);
    }
  };
}]);
