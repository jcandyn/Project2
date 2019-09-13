
// server.js
// load the things we need

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
// var path = require('path');


// Sets up the Express App
// =============================================================



// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {

    res.render('pages/index', {
    });
});





// Requiring our models for syncing
var db = require("./models/app");


app.use(require('./routes'));
app.use(express.static('public'));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Static directory


// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});









