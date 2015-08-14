'use strict';

angular.module('pulledApp')
  .controller('SignUpCtrl', ['Register', '$scope', 'Validation', function (Register, $scope, Validation) {

  var resource = {
      email: '',
      company_name: "ff",
      contact: "ff",
      personal_contact: "ff",
      address_attributes: {
        street_address: "ff",
        secondary_address: "ff",
        state: "ff",
        city: "ff",
        country: "ff",
        zip: "ff"
      }
    };

  $scope.signUp = function(user) {
    console.log(user);
    Register.signUp({user: user}).then(function(response){
    toastr.success('Welcome ' + response.email, 'Login Success');
    }, function(reason){
      Validation.validate(reason);
    });
  };


  //Private functions

  var initializeCtrl = function() {
    createVendorInstance();
    createContractorInstance();
  };

  var createContractorInstance = function() {
    $scope.contractor = {};
    angular.copy(resource, $scope.contractor);
    $scope.contractor.type= 'Contractor';
  };

  var createVendorInstance = function() {
    $scope.vendor = {};
    angular.copy(resource, $scope.vendor);
    $scope.vendor.license_number = "fdsf";
    $scope.vendor.tax_id_number = "dsfsd";
    $scope.vendor.type= 'Vendor';
  };


  initializeCtrl();
  console.log($scope.vendor);
  // $scope.signUp($scope.contractor);

}]);
