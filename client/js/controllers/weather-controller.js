app.controller('weatherController', ['$scope', '$resource', function($scope, $resource) {
	var Weather = $resource('/weather');

	$scope.city = 'Chicago';
	$scope.state = 'IL';
	$scope.temp = 0;

	$scope.getWeather = function(){
		var weather = new Weather();
		weather.city = $scope.weatherCity;
		weather.state = $scope.weatherState;
		$scope.city = $scope.weatherCity;
		$scope.state = $scope.weatherState;
		weather.$save(function(result){
			$scope.temp = result.temp;
		});
	}
}]);

