//Controller for weatherApp

app.controller('weatherController', ['$scope', '$resource', function($scope, $resource) {
	//I would like to use the ngResource to call back to the server to make the ajax request so I dont have to expose the api key to the client
	//side - not qorking right now will need to investigate further at a later time. 
	// var Weather = $resource('/weather');

  //variables to bind data to html 
	$scope.city = '';
	$scope.state = '';
	$scope.temp = 0;
	$scope.show = false;

	$scope.err = '';
	$scope.errorBlock = false
  
  //called upon submit - grabs input city and state and calls helper method to make ajax call
	$scope.getWeather = function(){
		$scope.city = $scope.weatherCity;
		$scope.state = $scope.weatherState;
		weather($scope.weatherCity, $scope.weatherState);

		/*wanted to use this function to initiate a post request to the server which would then make the ajax call. Planned to use callback
		  functions to pass data back and forth between client and server - which worked - I was successfullay initiating a post request to the server
		  which was using a callback function to send a response with a new temperature which arrived in the callback function under the variable
		  result which i was able to bind to the dom - that worked until I introduced the ajax call and things 
		  went sideways. Will need to investigate further at a later time. 
		*/
		// weather.$save(function(result){
		// 	$scope.temp = result.temp;
		// });
	}

  //This updates the temperature when called
	$scope.updateTemp = function(resTemp){
		$scope.temp = resTemp;
		$scope.show = true;
		$scope.errorBlock = false;

		//this method is normally called outside of angular operations so the dom needs to be updated after the above is run 
		$scope.$apply();
	}

  //This method will display an error to the user if there is a problem displaying temp
	$scope.error = function(e){
		$scope.errorBlock = true;
		$scope.show = false;
		$scope.err = e;
		$scope.$apply();
	}
}]);

