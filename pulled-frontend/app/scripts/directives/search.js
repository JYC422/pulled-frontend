'use strict';

angular.module('pulledApp').
directive("search", ['Session', '$location', 'Validation', 'API_URL', function(Session, $location, Validation, API_URL){
  return {
    restrict: "EA",
    templateUrl: "views/search.html",
    scope: true,
    link: function(scope) {

      scope.autocompleteUrl = API_URL + '/variants/autocomplete_search?page=' + 1 + '&q=';

      scope.search = function() {
  	    if (!Session.hasCurrentUser()){
  	      $('#loginModal').modal('show');
  	    } else {
  	      scope.saveSearchData();
  	    }
  	  };

  	  scope.signIn = function(){
  	    Session.signIn({user: scope.user}).then(function(response){
  	    toastr.success('Welcome ' + response.email, 'Login Success');
  	    scope.getSearchResults('vendor');
  	    }, function(reason){
          console.log(reason);
          Validation.validate(reason);
  	    });
  	  };

      //TODO, change hardcoded vendor on switch with scope.user.type
  	  scope.getSearchResults = function (userType) {
  	    userType = userType || 'vendor';
        switch(userType) {
  	      case 'contractor':
  	        getContractorProducts();
  	        $location.path('/contractor');
  	      break;
  	      case 'vendor':
  	        $location.path('/vendor');
  	      break;
  	    }
  	  };

      //Private Functions

  	  var saveSearchData = function() {
        $localStorage = {
          type: 'single',

        }
      }
		}
  };
}]);
