'use strict';

angular.module('pulledApp').
directive('login', ['$rootScope', 'Session', 'Validation', '$location', function($rootScope, Session, Validation, $location){
  return {
    templateUrl: 'views/login.html',
    scope: true,
    link: function(scope) {

      scope.isCollapsed = true;
      $('#login-btn').click(function(){
        scope.isCollapsed = !scope.isCollapsed;
        scope.$apply();
      });

      $(window).on("scroll", function () {
        var header = $("#landing-header");
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

      $rootScope.userSession = Session.hasCurrentUser;

      scope.user = {
        email: '',
        password: '',
      };

      scope.signIn = function(){
        Session.signIn({user: scope.user}).then(function(response){
        toastr.success('Welcome ' + response.email, 'Login Success');
        scope.isCollapsed = !scope.isCollapsed;
        }, function(reason){
          Validation.validate(reason);
        });
      };

      scope.userCompanyName = function() {
        return Session.getSession().company_name || '';
      };

      scope.signOut = function(){
        Session.signOut().then(function(){
          toastr.success('You have Log Out succesfully, see you next time', 'Logout Success');
          $location.path('/');
        });
      };

    }
  };
}]);
