'use strict';

describe('issues route', function () {

  beforeEach(function () {
    browser.get('/issues');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('IssuesCtrl');
  });

});
