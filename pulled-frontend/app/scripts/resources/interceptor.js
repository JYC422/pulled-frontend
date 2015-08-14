"use strict";

angular.module('pulledApp')
  .factory('PulledTokenInterceptor', function(){
    var authentication_token;
    var authentication_email;
    return {

      authentication_token: function(token){
        authentication_token = token;
      },
      authentication_email: function(email){
        authentication_email = email;
      },

      'request': function(config) {
        config.headers["X-USER-TOKEN"] = authentication_token();
        config.headers["X-USER-EMAIL"] = authentication_email();
        return config;
      }
    };
});
