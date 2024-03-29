"use strict";

angular.module('pulledApp')
  .factory('Session', ['User', '$localStorage', '$q', '$rootScope', function (User, $localStorage, $q, $rootScope) {

    var service = {};

    service.signIn = function(user) {
      var defered= $q.defer();
      var promise= defered.promise;

      User.signIn(user, function(data){
        service.setSession(data);
        defered.resolve(data);
      }, function(responseHeaders){
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.signOut = function() {
      var defered= $q.defer();
      var promise= defered.promise;

      clearSession();
      $rootScope.$broadcast('emptyCart');
      defered.resolve('nothing');

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
      return new User($localStorage.user);
    };

    service.isContractor = function() {
      return ($localStorage.user) ? angular.equals($localStorage.user.user_type, 'Contractor') : false;
    };

    service.isVendor = function() {
      return ($localStorage.user) ? angular.equals($localStorage.user.user_type, 'Vendor') : false;
    };

    service.setSession = function(user){
      console.log(user);
      $localStorage.user = {
        email: user.email,
        authToken: user.token,
        company_name: user.company_name,
        user_type: user.user_type
      };
    };


    // PRIVATE FUNCTIONS

    var clearSession = function(){
      $localStorage.$reset();
    };

    return service;

  }]);
