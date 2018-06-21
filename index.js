var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

app = express();

// body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res){
	res.send('hello world');
});

app.listen(3030, function(){
	console.log('running on server 3030...');
});