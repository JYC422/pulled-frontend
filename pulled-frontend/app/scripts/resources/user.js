'use strict';

angular.module('pulledApp')
.factory('User', ['$resource', 'API_URL', function($resource, API_URL){
  return $resource(API_URL + '/users/:id', { id: '@id' },
    {
      signUp: {
        method: 'POST'
      },
      signIn: {
        method: 'POST',
        url: API_URL + '/users/sign_in'
      },
      signOut: {
        method: 'DELETE',
        url: API_URL + '/users/sign_out'
      },
      update: {
        method: 'PUT'
      },
    });
}]);
