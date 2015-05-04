'use strict';

angular.module('bangularSpike')
  .directive('nav', function ($location) {
    return {
      restrict: 'E',
      templateUrl: 'directives/nav/nav.html',
      link: function(scope, element, attrs) { 
        var links = element.find('a'),
        onClass = attrs.active || 'on',
        link, url, currentLink, urlMap = {};

        for(var i = 0; i < links.length; i++){
          link = angular.element(links[i]);
          url = link.attr('href');
          urlMap[url] = link;
        }

        scope.$on('$routeChangeStart', function(){
          var pathLink = urlMap[$location.path()];
          if(pathLink){
            if(currentLink){
              currentLink.removeClass(onClass);
            }
            currentLink = pathLink;
            currentLink.addClass(onClass);
          }
        });
      }
    }
  });
