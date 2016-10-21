(function() {

  'use strict';

  angular
    .module('myApp.components.comments', [])
    .controller('commentsController', commentsController);

  commentsController.$inject = ['$scope', '$rootScope', '$location', '$routeParams'];

  function commentsController($scope, $rootScope, $location, $routeParams) {
    /* jshint validthis:true */
    const id = parseInt($routeParams.id);
    const arr = $rootScope.kittens[id].comments;
    this.kitten = $rootScope.kittens[id];
    this.add = (info) => {
      arr.push({
        comment: info.comment
      });
    };
  }
})();
