"use strict";

angular.module('pulledApp')
  .factory('Register', ['User', '$localStorage', 'Session', '$q', function (User, $localStorage, Session, $q) {

    var service = {};

    service.signUp = function(user) {
      var defered= $q.defer();
      var promise= defered.promise;

      User.signUp(user , function(data){
        console.log(data);
        Session.setSession(data);
        defered.resolve(data);
      }, function(responseHeaders){
        defered.reject(responseHeaders);
      });

      return promise;
    };

    return service;

  }]);
