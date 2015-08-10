'use strict';

angular.module('pulledApp').
directive('login', function(){
  return {
    link: function(scope, elem, attr, controller) {
      console.log('guille');
      elem.click(function(){
        if (sessionStorage.getItem("user")) {
          $(".header-item").hide();
          $("#header-logout").show();
          console.log('if');
        } else {
          $(".header-item").show();
          $("#header-logout").hide();
          console.log('else');
        };
         $('#loginModal').modal('hide');
      })
    }
  }
})
