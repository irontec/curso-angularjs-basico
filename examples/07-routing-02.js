
angular
    .module('myApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second-02.html',
            controller: 'secondController'
        })
    })
    .controller('mainController', function() {})

    .controller('secondController', function($scope, $routeParams) {
        $scope.num = $routeParams.num;
    })
