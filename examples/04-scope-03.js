angular.module('miApp', [])
    .controller('mainCtrl', function($scope) {
        $scope.name = 'Mikel';
        console.log($scope);
    });
