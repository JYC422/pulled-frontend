'use strict';

angular.module('pulledApp').
directive("scrollHeader", [ '$location', function($location){
  return {
    restrict: "A",
    link: function() {

      var header = $("#landing-header");
      header.removeClass("not-transparent");
      $(".navbar-brand").attr("src","images/pulled-logo-white.png");
      $(".navbar-nav").removeClass("black");

      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 20 && !header.hasClass("not-transparent") && angular.equals($location.path(), '/')) {
          console.log($location.path());
          console.log('scroll esta functionando');
          header.addClass("not-transparent");
          $(".navbar-brand").attr("src","images/pulled-logo.png");
          $(".navbar-nav").addClass("black");
        } else if ($(this).scrollTop() <= 20 && header.hasClass("not-transparent") && angular.equals($location.path(), '/')) {
          header.removeClass("not-transparent");
          $(".navbar-brand").attr("src","images/pulled-logo-white.png");
          $(".navbar-nav").removeClass("black");
        }
      });

    }
  };
}]);
