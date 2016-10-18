(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

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
