angular.module('miApp', [])
  .controller('miControlador', function($scope) {
      $scope.nombre = '';

      $scope.cambiarNombre = function() {
          $scope.nombre = 'Mikel';
      }
  });
