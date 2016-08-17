var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
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

app.post('/weather', weatherController.findWeather);

app.listen(3000, function() {
	console.log('I\'m Listening...');
})