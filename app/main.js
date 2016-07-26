import angular from 'angular';

angular.module('myApp', [])

.controller('myCtrl', ['$scope', function($scope) {
  $scope.name = 'Sean';
}]);