angular.module('pulledApp')
  .factory('Session', ['User', '$localStorage', function (User, $localStorage) {
    
    var service = {};
    var userSession = '';
    

    service.signIn = function(user) {
      User.signIn(user, function(data){
        console.log(data);
      }, function(responseHeaders){
        console.log(responseHeaders);
      });
    };

    service.signOut = function(user) {
      User.signOut(function(data){
        console.log(data);
      }, function(responseHeaders){
        console.log(responseHeaders);
      });
    };

    service.getAuthToken = function() {
      return $localStorage.authentication_token;
    };

    service.getSession = function(){
      return user = new User($localStorage.userSession);
    };


    // PRIVATE FUNCTIONS

    var clearSession = function(){
      localStorageService.clearAll();
      $rootScope.userSession = null;
      $rootScope.hasCurrentUser = false;
    };

    
   var setSession = function(user){
      localStorageService.set('authentication_token',user.authentication_token);
   };

    

    return service;

  }]);
