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

var reservations =[{
	name: 'Jesse',
	phoneNumber: '555-555-5555',
	email: 'jessesternmusic@gmail.com',
	id: '33333'
}, {
	name: 'Nick',
	phoneNumber: '555-555-5555',
	email: 'nhartmusic@gmail.com',
	id: '44444'
}];

var waitList = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Get all reservations
app.get("/view", function(req, res) {
   res.sendFile(path.join(__dirname, "view.html"))
});

//view JSON objects
app.get("/api/reservations", function(req, res) {
  res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
	res.json(waitList);
});


// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
  var newTable = req.body;
  // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  if (reservations.length >= 5){
  	waitList.push(newTable);
  } else {
  	reservations.push(newTable);
  };

console.log(waitList);
  res.json(newTable);
});




app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});