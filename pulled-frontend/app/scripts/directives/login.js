'use strict';

angular.module('pulledApp').
directive('login', ['$rootScope', 'Session', 'Validation', function($rootScope, Session, Validation){
  return {
    templateUrl: 'views/login.html',
    scope: true,
    link: function(scope) {
      scope.isCollapsed = true;
      $('#login-btn').click(function(){
        scope.isCollapsed = !scope.isCollapsed;
        scope.$apply();
      });

      $rootScope.userSession = Session.hasCurrentUser;

      scope.user = {
        email: '',
        password: '',
      };

      scope.signIn = function(){
        Session.signIn({user: scope.user}).then(function(response){
        toastr.success('Welcome ' + response.email, 'Login Success');
        }, function(reason){
          Validation.validate(reason);
        });
      };

      scope.signOut = function(){
        Session.signOut().then(function(){
          toastr.success('You have Log Out succesfully, see you next time', 'Logout Success');
        });
      };

    }
  };
}]);
