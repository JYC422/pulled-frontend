'use strict';

angular.module('pulledApp').
directive("scrollHeader", function(){
  return {
    restrict: "A",
    link: function(scope) {

      var header = $("#landing-header");
      header.removeClass("not-transparent");
      $(".navbar-brand").attr("src","images/pulled-logo-white.png");
      $(".navbar-nav").removeClass("black");

      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 20 && !header.hasClass("not-transparent")) {
          header.addClass("not-transparent");
          $(".navbar-brand").attr("src","images/pulled-logo.png");
          $(".navbar-nav").addClass("black");
        } else if ($(this).scrollTop() <= 20 && header.hasClass("not-transparent")) {
          header.removeClass("not-transparent");
          $(".navbar-brand").attr("src","images/pulled-logo-white.png");
          $(".navbar-nav").removeClass("black");
        }
      });

    }
  };
});
