'use strict';

angular.module('pulledApp')
  .controller('SearchCtrl', ['$scope', '$location', 'Session', function ($scope, $location, Session) {

  console.log('hola');

  $scope.search = function() {
    if (!Session.hasCurrentUser()){
      $('#loginModal').modal('show');
    } else {
      getSearchResults();
    }
  }

  $scope.signIn = function(){
    Session.signIn({user: scope.user}).then(function(response){
    toastr.success('Welcome ' + response.email, 'Login Success');
    getSearchResults();
    }, function(reason){
      toastr.error(reason.data.errors[0]);
    });
  };


  var getSearchResults = function () {
    switch($scope.user.type) {
      case 'contractor':
        getContractorProducts();
        location.path('/contractor')
      break;
      case 'vendor':
        getVendorProducts();
        location.path('/contractor')
      break
    }
  }

  var getVendorProducts = function() {
    // TO DO, make request to obtain products
  }

  var getContractorProducts = function() {
    // TO DO, make request to obtain products
  }

  }]);
