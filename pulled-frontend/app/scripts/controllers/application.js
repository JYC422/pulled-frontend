'use strict';

angular.module('pulledApp')
  .controller('ApplicationCtrl', ['$scope', '$localStorage', 'Session', function ($scope, $localStorage, Session) {

    $scope.userSession = $localStorage.user;

    

    }
]);
