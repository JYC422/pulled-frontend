'use strict';

angular.module('pulledApp')
  .controller('SignUpCtrl', ['Register', '$scope', 'Validation', '$location', 'CategoriesService', '$rootScope', 'categories', function (Register, $scope, Validation, $location, CategoriesService, $rootScope, categories) {

  $scope.categories = categories;
  $scope.selectedCategory = "";
  $scope.selectedSubCategory = {};
  $scope.subCategories=[];

  $scope.options = {
    country: 'us'
  };

  var resource = {
    password: '12341234',
    password_confirmation: '12341234',
    email: "",
    company_name: "",
    contact: "",
    personal_contact: "",
    first_name: "",
    last_name: "",
    address_attributes: {}
  };

  $scope.setAddressAttributes = function(addr) {
    addr.street_address = $scope.details.name;
    addr.secondary_address = $scope.details.secondary_address;
    addr.zip = $scope.details.postal_code;
    addr.state = $scope.details.administrative_area_level_1;
    addr.city = $scope.details.locality;
  };

  $scope.signUp = function(user) {
    setSubCategories(user);
    $scope.setAddressAttributes(user.address_attributes);
    console.log(user);
    Register.signUp({user: user}).then(function(response){
      toastr.success('Welcome ' + response.email, 'Registration Success');
      switch(response.user_type){
        case 'Vendor':
          $location.path('/vendor');
          break;
        case 'Contractor':
          $rootScope.$broadcast('initializeCart');
          $location.path('/contractor');
          break;
      }
    }, function(reason){
      Validation.validate(reason);
    });
  };


  // Private functions

  var initializeCtrl = function() {
    createVendorInstance();
    createContractorInstance();
  };

  var setSubCategories = function(user) {
    if (angular.equals(user.type, 'Contractor')) {
        var values = [];
      Object.keys($scope.selectedSubCategory).forEach(function (key) {
        var value = $scope.selectedSubCategory[key];
        values = values.concat(value);
      });
      if (values.length > 0) {
        user.sub_category_ids = values;
      }
    }
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
