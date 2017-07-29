/*



Create a few array variables that will hold the data

Create a set of routes for getting and posting table data

Create a set of routes for displaying the HTML pages

Use jQuery to run AJAX calls to GET and POST data from users to the Express server

*/

//dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Create a basic server using Express.JS
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Starts server to begin listening

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});