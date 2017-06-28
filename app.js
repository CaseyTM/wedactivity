const express = require('express');
const app = express();
const models = require('./models');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')
app.set('layout', 'layout');
app.use('/static', express.static('static'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());

app.use(routes)

app.listen(3000,function(req,res){
	console.log('App is running on localhost:3000');
});