'use strict';

describe('Directive: login', function() {

  var $compile,
      $httpBackend,
      $rootScope;

  // Load the myApp module, which contains the directive
  beforeEach(module('pulledApp'));
  beforeEach(module('views/login.html'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function($injector, _$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');

     var fakedMainResponse = {"token":"B8PH2ZsMz25WKzdTcNyy",
                              "email":"guillermo@toptierlabs.com"
                             };

     $httpBackend.when('GET', 'http://localhost:3000/api/v1/users/sign_in').respond(fakedMainResponse);
     $httpBackend.when('GET', 'views/').respond(fakedMainResponse);

  }));

  it('Replaces the directive element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile("<login></login>")($rootScope);
    // fire all the watches, for scope expression to be evaluated
    $rootScope.$digest();

    // Check that the compiled element contains the templated content
    expect(element.html()).toContain('<li id="header-login" ng-show="!userSession()" class="header-item">');
  });

});
