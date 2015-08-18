'use strict';

angular.module('pulledApp')
  .controller('SignUpCtrl', ['Register', '$scope', 'Validation', '$location', 'categories', 'CategoriesService', function (Register, $scope, Validation, $location, categories, CategoriesService) {

  $scope.categories = categories;
  $scope.selectedCategory = "";
  $scope.subCategories=['dfdsf', 'fdsfd', '0dfsdf'];

  $scope.$watch('selectedCategory', function(newValue, oldValue){
    if(oldValue !== newValue) {
      CategoriesService.getSubCategories(newValue).then(function(data){
        $scope.subCategories = data;
        console.log($scope.subCategories);
      })
    }
  }, true);

  var resource = {
      email: "",
      company_name: "",
      contact: "",
      personal_contact: "",
      first_name: "",
      last_name: "",
      address_attributes: {
        street_address: "",
        secondary_address: "",
        state: "ff",
        city: "ff",
        country: "",
        zip: 0
      }
    };

  $scope.signUp = function(user) {
    Register.signUp({user: user}).then(function(response){
    toastr.success('Welcome ' + response.email, 'Login Success');
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
