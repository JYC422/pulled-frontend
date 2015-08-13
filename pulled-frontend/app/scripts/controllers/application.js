'use strict';

angular.module('pulledApp')
  .controller('ApplicationCtrl', ['$rootScope', '$scope', '$localStorage', 'Session', function ($rootScope, $scope, $localStorage, Session) {

  	toastr.options = {
  		positionClass: "toast-top-center"
  	};

  }
]);
