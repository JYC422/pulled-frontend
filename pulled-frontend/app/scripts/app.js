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
    'ui.bootstrap',
    'ui.bootstrap.fontawesome',
    'ngAutocomplete',
    'angucomplete-alt'
  ])
  // .constant('API_URL', 'http://localhost:3000/api/v1')
  // .constant('HOST_URL', 'http://localhost:3000')
  .constant('API_URL', '//pulled-backend.herokuapp.com/api/v1')
  .constant('HOST_URL', '//pulled-backend.herokuapp.com')

  //For testing purposes
  .constant('toastr', toastr)
  // lodash support
  .constant('_', window._)

  .config(function ($routeProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common.Accept = "application/json";
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
        controller: 'SignUpCtrl',
        resolve: {
          categories: function(CategoriesService){
            return CategoriesService.getCategories();
          }
        }
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
        templateUrl: 'views/vendor/inventory_managment.html',
        controller: 'InventoryCtrl',
        resolve: {
          inventory: function(InventoryService){
            return InventoryService.getInventory();
          }
        }
      })
      .when('/contractor_profile', {
        templateUrl: 'views/vendor/contractor_profile.html',
      })
      .when('/orders_managment', {
        templateUrl: 'views/vendor/orders_managment.html',
      })
      .when('/contractor_managment', {
        templateUrl: 'views/vendor/contractor_managment.html',
      })
      .when('/price_managment', {
        templateUrl: 'views/vendor/price_managment.html',
      })
      .when('/vendor_register', {
        templateUrl: 'views/vendor/vendor_register.html',
        controller: 'SignUpCtrl',
        resolve: {
          categories: function(CategoriesService){
            return CategoriesService.getCategories();
          }
        }
      })
      .when('/500', {
        templateUrl: '500.html'
      })
      .when('/404', {
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  })

  .run(function(PulledTokenInterceptor, Session){
    PulledTokenInterceptor.authentication_token(Session.getAuthToken);
    PulledTokenInterceptor.authentication_email(Session.getAuthEmail);
  });
