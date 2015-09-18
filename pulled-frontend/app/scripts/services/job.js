"use strict";

angular.module('pulledApp')
  .factory('JobService', ['Job', '$q', '$rootScope', '$localStorage', function (Job, $q, $rootScope, $localStorage) {

    var service = {};

    service.getJobs = function() {
      var defered= $q.defer();
      var promise= defered.promise;

      Job.get(function(data){
        console.log(data);
        defered.resolve(data);
      }, function(responseHeaders){
        console.log(responseHeaders);
        defered.reject(responseHeaders);
      });

      return promise;
    };

    service.saveCurrentJob = function(jobId) {
      $localStorage.user.job = jobId;
    };

    service.hasCurrentJob = function() {
      return $localStorage.user && $localStorage.user.job;
    };

    return service;

  }]);
