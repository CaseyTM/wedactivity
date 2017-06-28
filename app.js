const express = require('express');
const app = express();
const models = require('./models');


app.get('/', function(req,res){
	res.send('Done');
});

app.listen(3000,function(req,res){
	console.log('App is running on localhost:3000');
});