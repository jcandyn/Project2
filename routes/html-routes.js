const express = require('express');
const router  = express.Router();
const path    = require('path');
const app     = express();


router.get('/', (req, res) => {
    res.sendFile( path.join( __dirname,'../public/testing.html' ));
});


// router.get('/survey', (req, res) => {
//     res.sendFile( path.join(__dirname,'../public/survey.html' ));
// });




module.exports = router;