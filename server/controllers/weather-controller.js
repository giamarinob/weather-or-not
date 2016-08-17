//This is the function the post request called - when called from the client the response successfully sends the temp - hardocded as 20 - 
//to the callback function on the client which then updates the dom
//Introducing the ajax call in here was where it all went wrong - need to investigate further

module.exports.findWeather = function(request, response){
	// var url = 'http://api.wunderground.com/api/' + key.key() + '/geolookup/conditions/q/' + request.body.state + '/' + request.body.city + '.json';
	response.send({temp: 20});
}
