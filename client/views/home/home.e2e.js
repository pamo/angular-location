'use strict';

describe('home route', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('HomeCtrl');
  });

  it('should have a nav element', function(){
    expect(element(by.binding('nav'))).toBe.defined;
  });
  
});
