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
      '/contractor_profile',
      '/sign_up'

    ];

    var errorPages = [
      '/404',
      '/500'
    ]

    var unrestrictedVendorPaths = [
      '/vendor',
      '/contractor_profile',
      '/contractor_managment',
      '/orders_managment',
      '/price_managment',
    ];

   unrestrictedVendorPaths = unrestrictedVendorPaths.concat(errorPages)

    $rootScope.$on('$routeChangeStart', function (event, next) {
      var nextPath = next.$$route.originalPath;
      if (errorPages.indexOf(nextPath) !== -1) {
        $rootScope.showingError = true;
      } else{
        $rootScope.showingError = false;
      }

      if (Session.hasCurrentUser()) {
        if (Session.isVendor()) {
          if (unrestrictedVendorPaths.indexOf(nextPath) === -1) {
            $location.path('/vendor');
          };
        };
      } else {
        if (restrictedLoggedPaths.indexOf(nextPath) === -1) {
          console.log(nextPath);
          $location.path('/');
        };
      }
    });




  }]);
