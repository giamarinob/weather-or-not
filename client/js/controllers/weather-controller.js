

app.controller('weatherController', ['$scope', '$resource', '$http', function($scope, $resource, $http) {
	// var Weather = $resource('/weather');
	var key = '668716cbf587902f';

	$scope.city = 'Chicago';
	$scope.state = 'IL';
	$scope.temp = 20;

	$scope.getWeather = function(){
		$scope.city = $scope.weatherCity;
		$scope.state = $scope.weatherState;
		$scope.temp = weather($scope.weatherCity, $scope.weatherState);
		// weather.$save(function(result){
		// 	$scope.temp = result.temp;
		// });
	}
}]);

