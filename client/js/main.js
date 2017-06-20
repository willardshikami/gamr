const gamerApp = angular.module('gamerApp', ['ngRoute']);

gamerApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller: 'GamerController',
        templateUrl: 'views/games.html'
    });

    $routeProvider.when('/games', {
        controller: 'GamerController',
        templateUrl: 'views/games.html'
    });
    
    $routeProvider.when('/about', {
        controller: 'GamerController',
        templateUrl: 'views/about.html'
    });
});