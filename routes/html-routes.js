// const router  = express.Router();
const path    = require('path');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
        //
        app.get("/", function(req, res) {
          // If the user already has an account send them to the members page
          if (req.user) {
            res.redirect("/members");
          }

          res.render(path.join(__dirname, "../views/pages/index.ejs"));

        });
      
        app.get("/login", function(req, res) {
          // If the user already has an account send them to the members page
          if (req.user) {
            res.redirect("/members");
          }
          res.render(path.join(__dirname, "../views/pages/login.ejs"));
        });
      
        // Here we've add our isAuthenticated middleware to this route.
        // If a user who is not logged in tries to access this route they will be redirected to the signup page
        app.get("/members", isAuthenticated, function(req, res) {
          res.render(path.join(__dirname, "../public/members.html"));
        });

        app.get("/signUp", function(req, res) {
          res.render(path.join(__dirname, "../views/pages/signUp.ejs"));
        });

     
}

// router.get('/survey', (req, res) => {
//     res.sendFile( path.join(__dirname,'../public/survey.html' ));
// });
