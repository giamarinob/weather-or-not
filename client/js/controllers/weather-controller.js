

app.controller('weatherController', ['$scope', '$resource', '$http', function($scope, $resource, $http) {
	// var Weather = $resource('/weather');
	var key = '668716cbf587902f';

	$scope.city = '';
	$scope.state = '';
	$scope.temp = 0;
	$scope.show = false;

	$scope.err = '';
	$scope.errorBlock = false

	$scope.getWeather = function(){
		$scope.city = $scope.weatherCity;
		$scope.state = $scope.weatherState;
		weather($scope.weatherCity, $scope.weatherState);
		// weather.$save(function(result){
		// 	$scope.temp = result.temp;
		// });
	}

	$scope.updateTemp = function(resTemp){
		$scope.temp = resTemp;
		$scope.show = true;
		$scope.errorBlock = false;
		$scope.$apply();
	}

	$scope.error = function(e){
		$scope.errorBlock = true;
		$scope.show = false;
		$scope.err = e;
		$scope.$apply();
	}
}]);

