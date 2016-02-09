
angular
    .module('myApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
    })
    .controller('mainController', function() {})
    .controller('secondController', function() {})
