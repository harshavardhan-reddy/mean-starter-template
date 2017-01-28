var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('tracer').colorConsole();
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
// var router = express.Router();

//Connecting to local mongo database mean
mongoose.connect('mongodb://localhost/mean');

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser());


app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/static', express.static(__dirname + '/bower_components/'));

//Give link to your favicon here and uncomment the code
// app.use(favicon(__dirname + '/public/images/favicon.ico'));

//See routes folder to see the defined routes 
var appRoutes = require('./routes')(app);


var server = require('http').Server(app);

//Define port here
var port = process.env.PORT || '8000';

server.listen(port);
server.on('listening', function() {
    console.log('Express server started on port %s', server.address().port);
});