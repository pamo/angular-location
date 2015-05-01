'use strict';

angular.module('bangularSpike')
  .directive('nav', function () {
    return {
      restrict: 'E',
      templateUrl: 'directives/nav/nav.html',
    };
  });
