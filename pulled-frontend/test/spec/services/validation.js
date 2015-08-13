describe('Service: Session', function () {

  var $http,
      API,
      fakedMainResponse,
      Session;

  // Load the myApp module, which contains the directive
  beforeEach(module('pulledApp'));
  beforeEach(module('ngStorage'));

  beforeEach(inject(function($injector, _$location_,  _Validation_, _$http_, _$localStorage_, _toastr_){

  $localStorage = _$localStorage_;
  $http =_$http_;
  $location = _$location_;
  Validation = _Validation_;
  toastr = _toastr_


  spyOn($location, 'path');
  spyOn(toastr, 'error');


  // Set up the mock http service responses
   $httpBackend = $injector.get('$httpBackend');

   fakedMainResponse = {data: { error: "authentication error"},
                        status: 401,
                        config: null ,
                        statusText: "Unauthorized"}

  }));

  it('should expose validate function', function(){
    expect(Validation.validate).toBeDefined();
    expect((typeof Validation.validate)).toEqual('function');
  })


  describe("Validation should show the proper message", function() {

    it("should redirect to 404", function () {
      fakedMainResponse.status = 404;
      Validation.validate(fakedMainResponse);
      expect($location.path).toHaveBeenCalledWith('/404');
    });

    it("should redirect to 500", function () {
      fakedMainResponse.status = 500;
      Validation.validate(fakedMainResponse);
      expect($location.path).toHaveBeenCalledWith('/500');
    });

    it("should show message", function () {
      Validation.validate(fakedMainResponse);
      expect(toastr.error).toHaveBeenCalledWith("authentication error");
    });

    it("should show the first message from errors", function () {
      delete fakedMainResponse['data']['error'];
      fakedMainResponse.data.errors = ["Login failed"]
      Validation.validate(fakedMainResponse);
      expect(toastr.error).toHaveBeenCalledWith("Login failed");
    });

  });

});

