'use strict';

angular.module('bangularSpike')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/article', {
        templateUrl: 'views/article/article.html',
        controller: 'ArticleCtrl',
        controllerAs: 'vm'
      });
  });
