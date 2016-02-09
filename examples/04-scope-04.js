angular.module('miApp', [])
    .controller('mainCtrl', function($scope) {
        $scope.name = 'Mikel';

        $scope.getName = function() {
            return $scope.name;
        }

        console.log($scope);
    });
