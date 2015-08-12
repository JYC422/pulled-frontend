'use strict';

angular.module('pulledApp').
directive('login', ['$rootScope', 'Session', function($rootScope, Session){
  return {
    templateUrl: 'views/login.html',
    link: function(scope, elem, attr, controller) {
      scope.showUpperLogin = attr.showupperlogin;
      console.log(scope.showUpperLogin);
      scope.isCollapsed = true;
      $('#login-btn').click(function(){
        scope.isCollapsed = !scope.isCollapsed;
        scope.$apply();
      });

      $rootScope.userSession = Session.hasCurrentUser;

      scope.user = {
        email: 'guillermo@toptierlabs.com',
        password: 'password',
      };

      scope.signIn = function(){
        Session.signIn({user: scope.user}).then(function(response){
        toastr.success('Welcome ' + response.email, 'Login Success');
        console.log(response);
        }, function(reason){
          toastr.error(reason.data.errors[0]);
          console.log(reason);
        });
      };

      scope.signOut = function(){
        Session.signOut().then(function(){
          toastr.success('You have Log Out succesfully, see you next time', 'Logout Success');
        });
      };

    }
  }
}])
