(function() {

  'use strict';

  angular
    .module('myApp.components.posts', [])
    .controller('addController', addController);

  addController.$inject = ['$scope'];

  function addController($scope) {
    /*jshint validthis: true */
    // this.greeting = 'test page';
  }

})();
