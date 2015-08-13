describe('Service: Session', function () {

  var $http,
      API,
      fakedMainResponse,
      Session;

  // Load the myApp module, which contains the directive
  beforeEach(module('pulledApp'));
  beforeEach(module('ngStorage'));
  beforeEach(inject(function($injector, _API_URL_,  _Session_, _$http_, _User_, _$localStorage_){

  $localStorage = _$localStorage_;
  $http =_$http_;
  API_URL = _API_URL_;
  Session = _Session_;
  User = _User_

  // Set up the mock http service responses
   $httpBackend = $injector.get('$httpBackend');

   fakedMainResponse = {"token":"B8PH2ZsMz25WKzdTcNyy",
                            "email":"foo@test.com"
                           };

   $httpBackend.when('POST', API_URL + '/users/sign_in').respond(fakedMainResponse);
   $httpBackend.when('DELETE', API_URL + '/users/sign_out').respond('success');

  }));

  it('should expose getSession function', function(){
    expect(Session.getSession).toBeDefined();
    expect((typeof Session.getSession)).toEqual('function');
  })

  it('should expose getSession function', function(){
    expect(Session.getSession).toBeDefined();
    expect((typeof Session.getSession)).toEqual('function');
  })
  it('should expose signIn function', function(){
    expect(Session.signIn).toBeDefined();
    expect((typeof Session.signIn)).toEqual('function');
  })

  it('should expose signOut function', function(){
    expect(Session.signOut).toBeDefined();
    expect((typeof Session.signOut)).toEqual('function');
  })

  it('should expose getAuthToken function', function(){
    expect(Session.getAuthToken).toBeDefined();
    expect((typeof Session.getAuthToken)).toEqual('function');
  })

  it('should expose hasCurrentUser function', function(){
    expect(Session.hasCurrentUser).toBeDefined();
    expect((typeof Session.hasCurrentUser)).toEqual('function');
  })

  it('should expose getSession function', function(){
    expect(Session.getSession).toBeDefined();
    expect((typeof Session.getSession)).toEqual('function');
  })

  it('should expose getSession function', function(){
    expect(Session.getSession).toBeDefined();
    expect((typeof Session.getSession)).toEqual('function');
  })

  it('should expose getSession function', function(){
    expect(Session.getSession).toBeDefined();
    expect((typeof Session.getSession)).toEqual('function');
  })

  it('should expose getSession function', function(){
    expect(Session.getSession).toBeDefined();
    expect((typeof Session.getSession)).toEqual('function');
  })

  describe("signIn function", function() {
    it("should set session properly", function () {
      Session.signIn();
      $httpBackend.flush();
      expect($localStorage.user).toEqual({ email: 'foo@test.com',
                                           authToken: 'B8PH2ZsMz25WKzdTcNyy'
                                         });
    });
  });

  describe("signOut function", function() {
    it("should clear session properly", function () {
      Session.signOut();
      // $httpBackend.flush();  TODO, TAKE OUT WHEN FIX SIGNOUT
      expect($localStorage.user).toBe(undefined);
    });
  });


});
