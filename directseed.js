var mongoose = require('mongoose');
var Schema = mongoose.Schema

var User = require('./models/user');
var Booking = require('./models/booking');

User.remove({}, function(err) {
  console.log('user collection removed');
});

Booking.remove({}, function(err) {
  console.log('booking collection removed');
});

var robert = new User({
  name: 'Robert Stewart',
  email: 'robertstewart@gmail.com',
  password: 'password',
  dob: 1970-02-15,
  gender: 'Male',
  rating: 1
});

robert.save(function(err, user) {
  if (err) console.log(err);
  console.log('Robert saved');
});

var booking1 = new Booking({
  user: robert,
  date: 2015-10-08
});

booking1.save(function(err, booking1) {
  if(err) console.log(err);
  console.log('Booking saved');

  Booking
  .findOne(booking1.id)
  .populate('user')
  .exec(function(err, booking1) {
    if (err) console.log(err);
    console.log('The user of the new booking is', booking1.user);
  });
});
