'use strict';

angular.module('bangularSpike')
  .controller('ArticleCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'ArticleCtrl',
      title: 'Dog People vs. Cat People: Who\'s More Intelligent?'
    });

  });
