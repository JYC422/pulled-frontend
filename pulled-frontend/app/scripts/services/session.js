angular.module('pulledApp')
  .factory('Session', ['User', '$localStorage', '$q', '$rootScope', function (User, $localStorage, $q, $rootScope) {

    var service = {};
    var userSession = '';

    service.signIn = function(user) {
      var defered= $q.defer();
      var promise= defered.promise;

      User.signIn(user, function(data){
        setSession(data);
        defered.resolve(data);
      }, function(responseHeaders){
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.getSession = function(){
      return $localStorage.user;
    }

    service.signOut = function(user) {
      var defered= $q.defer();
      var promise= defered.promise;

      clearSession();
      defered.resolve('nothing');
      // User.signOut(function(data){
      //   console.log(data);
      //   clearSession();
      //   defered.resolve(data);
      // }, function(responseHeaders){
      //   console.log(responseHeaders);
      //   defered.reject(responseHeaders);
      // });

      return promise;
    };

    service.getAuthToken = function() {
      return ($localStorage.user) ? $localStorage.user.authToken : '' ;
    };

    service.getAuthEmail = function() {
      return ($localStorage.user) ? $localStorage.user.email : '' ;
    };

    service.hasCurrentUser = function() {
      return $localStorage.user;
    };

    service.getSession = function(){
      return user = new User($localStorage.userSession);
    };


    // PRIVATE FUNCTIONS

    var clearSession = function(){
      $localStorage.$reset();
    };

    var setSession = function(user){
      $localStorage.user = {
        email: user.email,
        authToken: user.token
      }
    };


    return service;

  }]);
