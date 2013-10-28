'use strict';

describe('Routes test', function() {
  // Mock our module in our tests
  beforeEach(module('myApp'));

  var $location, $route, $rootScope;
  beforeEach(inject(
    function(_$location_, _$route_, _$rootScope_) {
      $location = _$location_;
      $route = _$route_;
      $rootScope = _$rootScope_;
    }));

  // Our tests will code here
  describe('index', function() {
    beforeEach(inject(function($httpBackend) {
      $httpBackend
        .expectGET('views/home.html')
        .respond(200, 'mainHTML');
    }));

  });
});