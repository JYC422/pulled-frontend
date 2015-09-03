'use strict';

angular.module('pulledApp').
directive("contractorHeader", [ '$location', '$rootScope', 'Session', function($location, $rootScope, Session){
  return {
    restrict: "EA",
    templateUrl: "views/contractor/contractor_header.html",
    scope: true,
    link: function(scope) {

      scope.$watch(function(){return $location.path()}, function(value){
        $(".contractor-header-item").removeClass('active');
        console.log(value);
        $('.contractor-header').find('a[href="/#' + value + '"]').find('.contractor-header-item').addClass('active');
      }, true);
    }
  };
}]);
