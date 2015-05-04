'use strict';

angular.module('bangularSpike')
  .controller('HomeCtrl', function () {

    var vm = this;
    angular.extend(vm, {
      name: 'HomeCtrl',
      title: 'Url Routing with Angular'
    });

  });
