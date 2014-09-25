'use strict';

/**
 * @ngdoc function
 * @name frontendFrameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendFrameApp
 */
angular.module('frontendFrameApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
