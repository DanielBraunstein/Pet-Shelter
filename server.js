// Require the Express Module
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/petShelterApp/dist' ));

require('./server/config/mongoose.js');
var route = require('./server/config/routes.js');

route(app);




app.listen(8000, function() {
    console.log('Listening to port 8000');
})