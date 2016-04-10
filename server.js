var express = require('express');
var app = express();

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthenication, function(req, res) {
	res.send('About US');
});

app.use(express.static(__dirname + '/public'));

var port = 3000;

app.listen(port, function() {
	console.log('Express server started on port =  ' + port);
});