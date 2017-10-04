angular.module('gamerApp');
gamerApp.controller('GamerController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

	$scope.getGames = function () {
		$http({
			method: 'GET',
			url: 'https://www.giantbomb.com/api/games/?format=json&api_key=e018467ddeda605d2d45eefc424cc178f4c201f3&filter=platform:146'
		}).then(function successCallback(response) {
			$scope.games = response.data;
		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}
}]);