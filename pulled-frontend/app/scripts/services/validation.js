'use strict';

angular.module('pulledApp')
  .factory('Validation', ['User', '$localStorage', '$q', '$rootScope', '$location', function (User, $localStorage, $q, $rootScope, $location) {

    var service = {};

    service.validate = function(response) {
      var errorMessage = '';
      switch(response.status) {
        case 401:
          errorMessage = response.data.error || response.data.errors[0];
          toastr.error(errorMessage);
          break;
        case 400:
          if (response.data.error) {
            var errors = JSON.parse(response.data.error);
            if (errors.email) {
              errorMessage = 'Email: ' + errors.email.join(', ') + '\n';
            }
            if (errors.license_number) {
              errorMessage = errorMessage + 'License Number: ' + errors.license_number.join(', ') + '\n';
            }
            toastr.error(errorMessage, 'Some fields are invalid');
          }
          break;
        case 404:
          $location.path('/404');
          break;
        case 500:
          $location.path('/500');
          break;

        default:
          toastr.error('Something unexpected occured, please try again');
      }
    };

    return service;

  }]);
