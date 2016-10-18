(function() {

  'use strict';

  angular
    .module('myApp.components.posts', [])
    .controller('addController', addController);

  addController.$inject = ['$rootScope', '$location'];

  function addController($rootScope, $location) {
    console.log($rootScope.kittens);
    /* jshint validthis:true */
    this.add = (info) => {
      $rootScope.kittens.push({
        name: info.name,
        bio: info.bio,
        image: info.image,
        like: info.like
      });
      $location.path('/');
    };
  }
})();
