(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(function($rootScope) {
      $rootScope.id = 0;
      $rootScope.kittens = [{
        id: $rootScope.id++,
        name: 'Angel',
        bio: 'Darkest Syn',
        image: 'http://cl.jroo.me/z1/S/_/v/e/a.daa-small-Cool-and-funny-kitten.jpg',
        like: 5,
        comments: [{
          comment: 'Angel - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }, {
          comment: 'Angel - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }]
      }, {
        id: $rootScope.id++,
        name: 'Gentle',
        bio: 'Men',
        image: 'http://cdn.earthporm.com/wp-content/uploads/2014/07/unusual-animal-markings-34.jpg',
        like: 5,
        comments: [{
          comment: 'Gentle - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }]
      }];
    });

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
    .when('/comments/:id', {
      templateUrl: 'js/components/posts/posts.comments.html',
      controller: 'commentsController',
      controllerAs: 'commentsCtrl'
    })
    .otherwise('/');
  }

})();
