var key = require('../../key');
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
});

module.exports.findWeather = function(request, response){
	var url = 'http://api.wunderground.com/api/' + key.key() + '/geolookup/conditions/q/' + request.body.state + '/' + request.body.city + '.json';
	console.log(url);
	var request = $.ajax({
		url: url,
		dataType: "jsonp",
	});

	request.done(function(response){
		var temp = response['current_observation']['temp_f'];
	  response.send({temp: temp});
	});
}