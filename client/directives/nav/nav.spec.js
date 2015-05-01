'use strict';

describe('Directive: nav', function () {

  beforeEach(module('bangularSpike', 'templates'));

  var element, scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<nav></nav>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should apply nav class to element', function(){
    expect(element.hasClass('nav')).toBe(true);
  });
});
