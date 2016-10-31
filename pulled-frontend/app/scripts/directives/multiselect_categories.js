'use strict';

angular.module('pulledApp').
directive('multiselectCategories', ['$rootScope', 'Session', 'Validation', '$location', 'CategoriesService', '$timeout', function($rootScope, Session, Validation, $location, CategoriesService, $timeout){
  return {
    templateUrl: 'views/multiselect_categories.html',
    scope: false,
    link: function(scope) {
      $('#selectCategories').multiSelect('refresh');
      $('#selectCategories').multiSelect({ selectableOptgroup: true });
      $timeout(function(){
        $('#selectCategories').multiSelect('refresh');
      });
    }
  };
}]);
