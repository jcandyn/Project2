// server.js
// load the things we need

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var path = require('path');
var PORT = process.env.PORT || 8000;
var session = require("express-session");
var app = express();
var db = require("./models");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Sets up the Express App
// =============================================================



// set the view engine to ejs
// app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
// app.get('/', function(req, res) {

// });

// app.get("/", function(req, res) {
//   // If the user already has an account send them to the members page
//   if (req.user) {
//     res.redirect("/members");
//   }
//   res.sendFile(path.join(__dirname, "../Project2/public/signUp.html"));
// });
// //
// // create account page 
// app.get('/createaccount', function(req, res) {
//   res.render('pages/createaccount');
// });

app.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }

  // res.sendFile(path.join(__dirname, "../Project2/public/signUp.html"));

  res.render(path.join(__dirname, "../Project2/views/pages/index.ejs"));
});

//
// create account page 
app.get('/createaccount', function(req, res) {
  res.render('pages/createaccount');
});

// Requiring our models for syncing


// app.use(require('./routes'));
app.use(express.static('public'));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());




// Static directory


// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});





