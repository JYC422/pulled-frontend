'use strict';

angular.module('pulledApp')
  .controller('SignUpCtrl', ['Register', '$scope', 'Validation', '$location', 'CategoriesService', '$rootScope', function (Register, $scope, Validation, $location, CategoriesService, $rootScope) {

  $scope.categories = CategoriesService.getCategories();
  $scope.selectedCategory = "";
  $scope.selectedSubCategory = {};
  $scope.subCategories=[];

  $scope.options = {
    country: 'us'
  }

  var resource = {
      email: "",
      company_name: "",
      contact: "",
      personal_contact: "",
      first_name: "",
      last_name: "",
      address_attributes: {}
    };

  $scope.setAddressAttributes = function(addr) {
    addr.street_address = $scope.details.street_number + ' ' + $scope.details.route;
    addr.secondary_address = $scope.details.secondary_address;
    addr.zip = $scope.details.postal_code;
    addr.state = $scope.details.administrative_area_level_1;
    addr.city = $scope.details.locality;
  }

  $scope.signUp = function(user) {
    $scope.setAddressAttributes(user.address_attributes);
    Register.signUp({user: user}).then(function(response){
    toastr.success('Welcome ' + response.email, 'Registration Success');
    $location.path('/');
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
    $scope.contractor.type= "Contractor";
    $scope.contractor.location_id_number = "";
  };

  var createVendorInstance = function() {
    $scope.vendor = {};
    angular.copy(resource, $scope.vendor);
    $scope.vendor.license_number = "";
    $scope.vendor.local_id_number = "";
    $scope.vendor.tax_id_number = "";
    $scope.vendor.type= 'Vendor';
  };


  initializeCtrl();

}]);
