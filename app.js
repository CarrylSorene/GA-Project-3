var express = require('express');
var app = express();
var port = process.env.PORT || 3000
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var configDB = require('./config/database');
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//database setup
mongoose.connect(configDB.url);

require('./config/passport')(passport)

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs');

app.use(session({ secret: 'ButIBeingPoorHaveOnlyMyDreams' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())

require('./app/routes.js')(app, passport);

// var directSeed = require('./directseed');

app.engine('ejs', require('ejs').renderFile);
app.set('views', './views');

// // Old Routes
app.use(express.static(__dirname + '/public'));
// app.use('/users', require('./controllers/users'))

// app.get('/', function(req, res){
//   res.render('index');
// })

// //Temporary routes to test functionality
// app.get('/availibility', function(req, res){
//   res.render('availibility');
// })

// app.get('/register', function(req, res){
//   res.render('register');
// })

app.listen(port);
console.log('Server up on port', port);