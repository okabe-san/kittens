(function() {

  'use strict';

  angular
    .module('myApp.components.posts', [])
    .controller('addController', addController);

  addController.$inject = ['$rootScope', '$location'];

  function addController($rootScope, $location) {
    // console.log($scope);
    $rootScope.kittens = [];
    let arr = $rootScope.kittens;
    this.add = (info) => {
      arr.push({
        name: info.name,
        bio: info.bio,
        image: info.image,
        like: info.like
      });
      $location.path('/');
    };
  }
})();
