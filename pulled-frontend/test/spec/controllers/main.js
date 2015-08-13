'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('pulledApp'));

  var MainCtrl,
      scope;

  beforeEach(inject(function ($controller, $rootScope) {

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

  }));

});
