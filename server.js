const express = require('express')
const app = express()
consst = require('path');
 
app.get('/', function (req, res) {
  res.send(path.join(__dirname,'/public/testing.html'));
})
 console.log(__dirname);
app.listen(3000,()=> console.log(`server listening http://localhost:3000`) )