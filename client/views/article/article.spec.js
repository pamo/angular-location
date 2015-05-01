'use strict';

describe('Controller: ArticleCtrl', function () {

  beforeEach(module('bangularSpike'));

  var ArticleCtrl;

  beforeEach(inject(function ($controller) {
    ArticleCtrl = $controller('ArticleCtrl', {});
  }));

  it('should ...', function () {
    expect(1).toBe(1);
  });

});
