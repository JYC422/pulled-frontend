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

    service.createJob = function(newJob) {
      var defered= $q.defer();
      var promise= defered.promise;

      Job.save(newJob, function(data){
        service.saveCurrentJob(data.id);
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

    service.getCurrentJob = function() {
      return $localStorage.user.job;
    };

    return service;

  }]);
