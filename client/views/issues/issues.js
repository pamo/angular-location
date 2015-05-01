'use strict';

angular.module('bangularSpike')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/issues', {
        templateUrl: 'views/issues/issues.html',
        controller: 'IssuesCtrl',
        controllerAs: 'vm'
      });
  });
