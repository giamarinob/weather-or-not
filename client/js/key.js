//This is where i eneded up settling to make the ajax call to the api to get the data. This is not what I wanted to do at all
//but this is what I eneded up doing to get the app to work properly - for now.

function weather(city, state){
	var key = '668716cbf587902f';
	var url = 'https://api.wunderground.com/api/' + key + '/conditions/q/' + state + '/' + city + '.json';
  var temp = 0;

  //make the ajax call to the api
	$.ajax({
		url: url,
		dataType: 'jsonp',
		//if the call was a success make sure we recieved a specific attribute from the response to update temp - or send an error
		success : function(response){
			if(response['current_observation']){
				var temp_f = parseInt(response['current_observation']['temp_f'])
				angular.element(document.getElementById('controller')).scope().updateTemp(temp_f);
			}else{
				angular.element(document.getElementById('controller')).scope().error("We could not find that location! Please Try Again!");
			}
		},
		//if there was some other error handle it
		error : function(xhr, ajaxOptions, thrownError){
			angular.element(document.getElementById('controller')).scope().error(thrownError);
		}
	});
}