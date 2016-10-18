(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(function($rootScope) {
      $rootScope.kittens = [{
        id: $rootScope.id++,
        name: 'Angel',
        bio: 'Darkest Syn',
        image: 'http://cl.jroo.me/z1/S/_/v/e/a.daa-small-Cool-and-funny-kitten.jpg',
        like: 5
      }];
    })

  function appConfig($routeProvider) {
    $routeProvider
     .when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/add', {
      templateUrl: 'js/components/posts/posts.add.html',
      controller: 'addController',
      controllerAs: 'addCtrl'
    })
    .otherwise('/');
  }

})();
