'use strict';

angular
  .module('pulledApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('API_URL', 'http://localhost:3000/api/v1')
  .constant('HOST_URL', 'http://localhost:3000')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/sign_up', {
        templateUrl: 'views/sign_up.html',
        controller: 'MainCtrl',
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'MainCtrl',
      })
      .when('/contractor', {
        templateUrl: 'views/contractor.html',
        controller: 'MainCtrl',
      })
      .when('/contractor_register', {
        templateUrl: 'views/contractor_register.html',
        controller: 'MainCtrl',
      })
      .when('/credit_application', {
        templateUrl: 'views/credit_application.html',
        controller: 'MainCtrl',
      })
      .when('/order_status', {
        templateUrl: 'views/order_status.html',
        controller: 'MainCtrl',
      })
      .when('/purchase_bids', {
        templateUrl: 'views/purchase_bids.html',
        controller: 'MainCtrl',
      })
      .when('/sign_up', {
        templateUrl: 'views/sign_up.html',
        controller: 'MainCtrl',
      })
      .when('/vendor', {
        templateUrl: 'views/vendor.html',
        controller: 'MainCtrl',
      })
      .when('/vendor_register', {
        templateUrl: 'views/vendor_register.html',
        controller: 'MainCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
