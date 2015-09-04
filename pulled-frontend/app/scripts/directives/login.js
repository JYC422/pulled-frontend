'use strict';

angular.module('pulledApp').
directive('login', ['$rootScope', 'Session', 'Validation', '$location', function($rootScope, Session, Validation, $location){
  return {
    templateUrl: 'views/login.html',
    scope: true,
    link: function(scope) {

      scope.isCollapsed = true;
      $('#login-btn').click(function(){
        window.scrollTo(0,0);
        scope.isCollapsed = !scope.isCollapsed;
        scope.$apply();
      });

      $rootScope.userSession = Session.hasCurrentUser;
      $rootScope.contractorSession = Session.isContractor;
      $rootScope.vendorSession = Session.isVendor;

      scope.user = {
        email: '',
        password: '',
      };

      scope.signIn = function(){
        Session.signIn({user: scope.user}).then(function(response){
          console.log(response);
          toastr.success('Welcome ' + response.email, 'Login Success');

          scope.isCollapsed = !scope.isCollapsed;
          $('#loginModal').modal('hide');

          switch(response.user_type){
            case 'Vendor':
              $location.path('/vendor');
              break;
            case 'Contractor':
              $location.path('/contractor');
              break;
          }
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
