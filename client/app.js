'use strict';

angular.module('bangularSpike', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
