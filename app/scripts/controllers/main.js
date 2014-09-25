'use strict';

/**
 * @ngdoc function
 * @name frontendFrameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendFrameApp
 */
angular.module('frontendFrameApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
