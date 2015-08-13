describe('Directive: search', function() {
  var $compile,
      element,
      $rootScope,
      $location;

  // Load the myApp module, which contains the directive
  beforeEach(module('pulledApp'));
  beforeEach(module('views/search.html'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function($injector, _$compile_, _$rootScope_, _$location_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $location = _$location_;
    $rootScope = _$rootScope_;
    spyOn($location, 'path');
    scope = $rootScope.$new();

    element = $compile("<search></search>")(scope);
    scope.$digest();

    // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');

     var fakedMainResponse = {"token":"B8PH2ZsMz25WKzdTcNyy",
                              "email":"foo@test.com"
                             }

     $httpBackend.when('GET', 'http://localhost:3000/api/v1/users/sign_in').respond(fakedMainResponse);



  }));

  it('Replaces the directive element with the appropriate content', function() {
    expect(element.html()).toContain('<form ng-submit="signIn()" class="login-form ng-pristine ng-valid ng-valid-email">');
  });

  it('check if search redirects to vendor inventory', function() {
    var isolated = element.scope();
    isolated.getSearchResults('vendor');
    expect($location.path).toHaveBeenCalledWith('/contractor')
  });

  it('check if search redirects to search results', function() {
    var isolated = element.scope();
    isolated.getSearchResults('contractor');
    expect($location.path).toHaveBeenCalledWith('/contractor')
  });

});
