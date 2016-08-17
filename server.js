var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    http              = require('http'),
    weatherController = require('./server/controllers/weather-controller');

//Inject Body Parser to auto parse request bodies
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

//Route for '/'
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/client/views/index.html');
});


//Use middleware to serve up files from /client/js whenever someone requests js files from express
app.use('/js', express.static(__dirname + '/client/js'));

app.post('/weather', function(request, response){
	console.log(request.body.state);
	var url = 'http://api.wunderground.com/api/' + key.key() + '/geolookup/conditions/q/' + request.body.state + '/' + request.body.city + '.json';
	console.log(url);

	var options = {
		host: 'http://api.wunderground.com',
		path: '/api/' + key.key() + '/geolookup/conditions/q/' + request.body.state + '/' + request.body.city + '.json'
	};

	http.get(options, function(res){
		resp.on('data', function(body){
			console.log(body);
		});
	}).on('error', function(e){
		console.log(e.message);
	});

	//send back the temperature from the api call
	response.send({temp: 20});
});

app.listen(3000, function() {
	console.log('I\'m Listening...');
})