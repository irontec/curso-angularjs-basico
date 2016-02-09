angular.module('miApp', [])
    .controller('mainCtrl', function($scope, $http, $window) {
        $http.get("http://restcountries.eu/rest/v1/region/europe")
            .then(function(res){
                console.log(res);
                $scope.countries = res.data;
            }, function(res){
                console.log(res);
                $window.alert('Error')
            });
    });
