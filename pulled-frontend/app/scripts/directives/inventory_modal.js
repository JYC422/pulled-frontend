'use strict';

angular.module('pulledApp').
directive('inventoryModal', ['$rootScope', 'Session', 'Validation', '$location', 'CategoriesService', '$timeout', 'API_URL', function($rootScope, Session, Validation, $location, CategoriesService, $timeout, API_URL){
  return {
    templateUrl: 'views/vendor/inventory_modal.html',
    scope: true,
    link: function(scope, element, attrs) {

      scope.getSubCategories = function(pr) {
        if (pr) {
          return $rootScope._.pluck(pr.sub_categories, 'name').join(', ');
        }
      };

      scope.autocompleteUrl = API_URL + '/variants/autocomplete_search?page=' + 1 + '&q='

      scope.$watch('searchedProduct', function(newValue, oldValue){
        scope.disableField= !Boolean(scope.searchedProduct) && scope.disableMode;
        if (!scope.disableField && scope.searchedProduct) {
          angular.extend(scope.item, scope.searchedProduct.description);
        };
      }, true);

      var setEditModal = function() {
        scope.modalTitle = 'EDIT ITEM';
        scope.disableSearch = true;
        scope.submitForm = scope.updateProduct;
        scope.modalId = 'EditInventoryModal';
        scope.disableField = false;
        scope.disableMode = false;
        scope.submitFunction = scope.updateProduct;
      };

      var setNewModal = function() {
        scope.modalTitle = 'NEW ITEM';
        scope.disableSearch = false;
        scope.submitForm = scope.createProduct;
        scope.modalId = 'NewInventoryModal';
        scope.disableField = true;
        scope.disableMode = true;
        scope.submitFunction = scope.createProduct;
      };

      switch(attrs.type) {
        case 'edit':
          setEditModal();
          break;
        case 'new':
          setNewModal();
          break;
      }

    }
  };
}]);
