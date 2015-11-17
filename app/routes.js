var Booking = require('./models/booking')
var User = require('./models/user')

module.exports = function(app, passport) {

// HOME
  app.get('/', function(req, res) {
    res.render('index.ejs', { message: req.flash('loginMessage') }); // load the index.ejs file
  });

// LOGIN

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/availibility', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

// SIGNUP
  app.get('/signup', function(req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

// process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/availibility', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));
  
// AVAILABILITY SECTION
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
  app.get('/availibility', isLoggedIn, function(req, res) {
    res.render('availibility.ejs', {
      user : req.user // get the user out of session and pass to template
    });
  });

  app.post('/availibility', isLoggedIn, function(req, res) {
    Booking
    .create({
      user1: req.user._id,
      date: req.body.date
    }, function(err, booking){
      res.json(booking)
    })
  });

  app.get('/bookings', isLoggedIn, function(req, res){
    var bookings = {}
    Booking
      .find({})
      .populate('user1', '_id name dob gender rating')
      .exec(function(err, data){
      if(err) console.log(err)
      bookings.user = req.user._id
      if(!data) return res.json(bookings)
      bookings.data = data
      res.json(bookings)
    })
  })


// LOGOUT
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

  // route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}