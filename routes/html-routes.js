const express = require('express');
// const router  = express.Router();
const path    = require('path');

module.exports = function(app) {

    
    app.get("/", function(req, res) {

        res.render('pages/index', {
        });
    });

    app.get("")
    
};

// router.get('/survey', (req, res) => {
//     res.sendFile( path.join(__dirname,'../public/survey.html' ));
// });
