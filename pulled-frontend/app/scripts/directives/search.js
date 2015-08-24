'use strict';

angular.module('pulledApp').
directive("search", ['Session', '$location', 'Validation', function(Session, $location, Validation){
  return {
    restrict: "EA",
    templateUrl: "views/search.html",
    scope: true,
    link: function(scope) {

      scope.search = function() {
  	    if (!Session.hasCurrentUser()){
  	      $('#loginModal').modal('show');
  	    } else {
  	      scope.getSearchResults();
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
  	        getVendorProducts();
  	        $location.path('/vendor');
  	      break;
  	    }
  	  };

      //Private Functions

  	  var getVendorProducts = function() {
  	    // TODO, make request to obtain products
  	  };

  	  var getContractorProducts = function() {
  	    // TODO, make request to obtain products
  	  };
		}
  };
}]);