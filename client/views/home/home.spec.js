'use strict';

describe('Controller: HomeCtrl', function () {

  beforeEach(module('bangularSpike'));

  var HomeCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should hav a nav element',  function () {
    expect(1).toBe(1);
  });

});
