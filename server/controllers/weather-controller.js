var key = require('../../key'),
    request = require('request'),
    async   = require('async');

exports.findWeather = function(request, response){
	var url = 'http://api.wunderground.com/api/' + key.key() + '/geolookup/conditions/q/' + request.body.state + '/' + request.body.city + '.json';
	console.log(url);
	response.send({temp: 20});
}
