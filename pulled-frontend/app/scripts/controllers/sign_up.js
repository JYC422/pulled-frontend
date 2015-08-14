'use strict';

angular.module('pulledApp')
  .controller('SignUpCtrl', ['Register', '$scope', 'Validation', function (Register, $scope, Validation) {

  var resource = {
      email: 'hiperguille10@gmail.com',
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
    angular.extend(resource, $scope.vendor);
    $scope.vendor.license_number = "";
    $scope.vendor.tax_id_number = "";
    $scope.vendor.type= 'Vendor';
  };


  initializeCtrl();

}]);
