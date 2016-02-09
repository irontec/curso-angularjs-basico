angular.module('miApp', [])
    .controller('mainCtrl', function($scope, $http, $window) {

        $scope.reloadCountries = function() {
            $http.get($scope.url)
                .then(function(res){
                    console.log(res);
                    $scope.countries = res.data;
                }, function(res){
                    console.log(res);
                    $window.alert('Error')
                });
        }
    });
