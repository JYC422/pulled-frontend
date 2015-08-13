angular.module('pulledApp')
  .factory('Validation', ['User', '$localStorage', '$q', '$rootScope', function (User, $localStorage, $q, $rootScope) {

    var service = {};

    service.validate = function(response) {
      console.log(response);
      switch(response.status) {
        case 401:
          var errorMessage = response.data.error || response.data.errors[0];
          toastr.error(errorMessage);
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
    }

    return service;

  }]);
