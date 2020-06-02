var express = require('express');
var controllers = require('./restControllers/controllers');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');
app.use(express.static('./public'));


controllers(app,urlencodedParser);


app.listen(3000);
console.log('Listening at port 3000');
