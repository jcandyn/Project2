// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var drinks = [
      {name: "soda", brand: "pepsi"},
      {name: "soda", brand: "coke"},
      {name: "soda", brand: "fanta"},
    ];
    var tagline = "code code code";

    res.render('pages/index', {
      drinks: drinks,
      tagline: tagline
    });
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');