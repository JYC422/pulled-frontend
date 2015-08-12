'use strict';

angular
  .module('pulledApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.bootstrap'
  ])
  .constant('API_URL', 'http://localhost:3000/api/v1')
  .constant('HOST_URL', 'http://localhost:3000')

  .config(function ($routeProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.interceptors.push('PulledTokenInterceptor');

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
        controller: 'SearchCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function(PulledTokenInterceptor, Session, $rootScope){
    PulledTokenInterceptor.authentication_token(Session.getAuthToken);
    PulledTokenInterceptor.authentication_email(Session.getAuthEmail);
  });
