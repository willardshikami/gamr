angular.module('gamerApp');
    gamerApp.controller('GamerController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

        $.ajax({
            url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/', 
            type: 'GET', 
            data: {}, 
            dataType: 'json',
            success: function(data) { console.dir((data.source)); },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "So1JUS5o8pmshR7yq2IIe2ci6ZUVp1Ux3EZjsnQ44QtfpEH53Z"); // Enter here your Mashape key
            }
        });

        console.log('Games loaded..')

    }]);