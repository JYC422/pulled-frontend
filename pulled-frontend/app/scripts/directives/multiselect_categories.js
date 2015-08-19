'use strict';

angular.module('pulledApp').
directive('multiselectCategories', ['$rootScope', 'Session', 'Validation', '$location', 'CategoriesService', '$timeout', function($rootScope, Session, Validation, $location, CategoriesService, $timeout){
  return {
    templateUrl: 'views/multiselect_categories.html',
    scope: false,
    link: function(scope) {

      $("#my-select").multiSelect('refresh');
      scope.$watch('selectedCategory', function(newValue, oldValue){
        if(oldValue !== newValue) {
          CategoriesService.getSubCategories(newValue).then(function(data){
            scope.subCategories = data;
            $timeout(function(){
              $("#my-select").multiSelect("refresh");
            });
          });
        }
      }, true);

    }
  };
}]);
