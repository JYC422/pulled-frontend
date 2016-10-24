(function() {
  'use strict';

    angular
      .module('pulledApp')

      // .constant('API_URL', 'http://localhost:3000/api/v1')
      // .constant('HOST_URL', 'http://localhost:3000')
      .constant('API_URL', 'http://pulled-backend.herokuapp.com/api/v1')
      .constant('HOST_URL', 'http://pulled-backend.herokuapp.com')

      //For testing purposes
      .constant('toastr', toastr)
      // lodash support
      .constant('_', window._)
})();
