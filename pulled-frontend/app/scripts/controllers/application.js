'use strict';

angular.module('pulledApp')
  .controller('ApplicationCtrl', ['$rootScope', 'Session', '$location', function ($rootScope, Session, $location) {

  	toastr.options = {
  		positionClass: "toast-top-center",
      escapeHtml: true
  	};

    $rootScope._ = _;

     var restrictedLoggedPaths = [
      '/vendor_register',
      '/contractor_register',
      '/'

    ];

    var unrestrictedVendorPaths = [
      '/vendor',
      '/contractor_profile',
      '/contractor_managment',
      '/orders_managment',
      '/price_managment',
      '/404',
      '/500'
    ];

    $rootScope.$on('$routeChangeStart', function (event, next) {
      var nextPath = next.$$route.originalPath;
      if (Session.hasCurrentUser()) {
        if (Session.isVendor()) {
          if (unrestrictedVendorPaths.indexOf(nextPath) === -1) {
            console.log('DENIED');
            $location.path('/vendor');
          };
        };
      } else {
        if (restrictedLoggedPaths.indexOf(nextPath) === -1) {
          console.log('DENIED');
          $location.path('/');
        };
      }
    });




  }]);
