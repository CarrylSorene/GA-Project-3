var express = require('express');
var app = express();
var port = process.env.PORT || 3000
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');

//database setup
mongoose.connect('mongodb://localhost:27017/sports-partner');
var directSeed = require('./directseed');

app.set('view engine', 'ejs');
app.set('views,' './views');

// Routes
app.use(express.static(__dirname + '/public'));
app.use('/users', require('./controllers/users'))

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.listen(port);