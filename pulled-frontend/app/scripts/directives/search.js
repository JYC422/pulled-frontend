'use strict';

angular.module('pulledApp').
directive("search", ['Session', '$location', 'Validation', function(Session, $location, Validation){
  return {
    restrict: "EA",
    templateUrl: "views/search.html",
    scope: true,
    link: function(scope, elem, attr, controller) {
    
      scope.search = function() {
  	    if (!Session.hasCurrentUser()){
  	      $('#loginModal').modal('show');
  	    } else {
  	      getSearchResults();
  	    }
  	  }

  	  scope.signIn = function(){
  	    Session.signIn({user: scope.user}).then(function(response){
  	    toastr.success('Welcome ' + response.email, 'Login Success');
  	    getSearchResults();
  	    }, function(reason){
          console.log(reason);
          Validation.validate(reason);
  	    });
  	  };


      // Private functions

      //TO DO, change hardcoded vendor on switch with scope.user.type
  	  var getSearchResults = function () {
  	    switch('vendor') {
  	      case 'contractor':
  	        getContractorProducts();
  	        $location.path('/contractor');
  	      break;
  	      case 'vendor':
  	        getVendorProducts();
  	        $location.path('/contractor');
  	      break
  	    }
  	  }

  	  var getVendorProducts = function() {
  	    // TO DO, make request to obtain products
  	  }

  	  var getContractorProducts = function() {
  	    // TO DO, make request to obtain products
  	  }
		}
  }
}]);
