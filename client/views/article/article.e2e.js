'use strict';

describe('article route', function () {

  beforeEach(function () {
    browser.get('/article');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ArticleCtrl');
  });

});
