'use strict';

angular.module('pulledApp')
  .controller('ApplicationCtrl', ['$rootScope', function ($rootScope) {

  	toastr.options = {
  		positionClass: "toast-top-center",
      escapeHtml: true
  	};

    $rootScope._ = _;

  }]);
