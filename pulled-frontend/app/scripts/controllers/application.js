'use strict';

angular.module('pulledApp')
  .controller('ApplicationCtrl', ['$scope', '$localStorage', function ($scope, $localStorage) {

    $scope.userSession = $localStorage.user;



    }
]);
