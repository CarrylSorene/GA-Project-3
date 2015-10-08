var mongoose = require('mongoose');
var Schema = mongoose.Schema

var User = require('./app/models/user');
var Booking = require('./app/models/booking');

User.remove({}, function(err) {
  console.log('user collection removed');
});

Booking.remove({}, function(err) {
  console.log('booking collection removed');
});

//User1
var robert = new User({
  name: 'Robert Stewart',
  local: {
    email: 'robertstewart@gmail.com',
    password: 'password'
  },
  dob: 1970-02-15,
  gender: 'Male',
  rating: 1
});

// password: 'password'



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
    // console.log('Booking1: ', booking1);
    if (err) console.log(err);
  });
});

//User2
var casey = new User({
  name: 'Casey Bennett',
  local: {
    email: 'caseybennett@gmail.com',
    password: 'password'
  },
  dob: 2001-12-03,
  gender: 'Male',
  rating: 1
});

casey.save(function(err, user) {
  if (err) console.log(err);
  console.log('Casey saved');
});

var booking2 = new Booking({
  user: casey,
  date: 2015-10-08
});

booking2.save(function(err, booking2) {
  if(err) console.log(err);
  console.log('Booking saved');

  Booking
  .findOne(booking2.id)
  .populate('user')
  .exec(function(err, booking2) {
    // console.log('Booking2: ', booking2);
    if (err) console.log(err);
  });
});

// //User3

// var willa = new User({
//   name: 'Willa Morgan',
//   local: {
//     email: 'willa-morgan@gmail.com',
//     password: User.generateHash('password')
//   },
//   dob: 1994-09-12,
//   gender: 'Female',
//   rating: 1
// });

// willa.save(function(err, user) {
//   if (err) console.log(err);
//   console.log('Willa saved');
// });

// var booking3 = new Booking({
//   user: willa,
//   date: 2015-10-09
// });

// booking3.save(function(err, booking3) {
//   if(err) console.log(err);
//   console.log('Booking saved');

//   Booking
//   .findOne(booking3.id)
//   .populate('user')
//   .exec(function(err, booking3) {
//     if (err) console.log(err);
//     // console.log('The user of the new booking is', booking3.user);
//   });
// });

// //User4

// var samantha = new User({
//   name: 'Samantha Wilson',
//   local: {
//     email: 'sammywilson@gmail.com',
//     password: User.generateHash('password')
//   },
//   dob: 1984-09-12,
//   gender: 'Female',
//   rating: 1
// });

// samantha.save(function(err, user) {
//   if (err) console.log(err);
//   console.log('Samantha saved');
// });

// var booking4 = new Booking({
//   user: samantha,
//   date: 2015-10-11
// });

// booking4.save(function(err, booking4) {
//   if(err) console.log(err);
//   console.log('Booking saved');

//   Booking
//   .findOne(booking4.id)
//   .populate('user')
//   .exec(function(err, booking4) {
//     if (err) console.log(err);
//     // console.log('The user of the new booking is', booking4.user);
//   });
// });

// //User5

// var alicia = new User({
//   name: 'Alicia Stewart',
//   local: {
//     email: 'aliciastewart@gmail.com',
//     password: User.generateHash('password')
//   },
//   dob: 1986-04-29,
//   gender: 'Female',
//   rating: 1
// });

// alicia.save(function(err, user) {
//   if (err) console.log(err);
//   console.log('Alicia saved');
// });

// var booking5 = new Booking({
//   user: alicia,
//   date: 2015-10-12
// });

// booking5.save(function(err, booking5) {
//   if(err) console.log(err);
//   console.log('Booking saved');

//   Booking
//   .findOne(booking5.id)
//   .populate('user')
//   .exec(function(err, booking5) {
//     if (err) console.log(err);
//     // console.log('The user of the new booking is', booking5.user);
//   });
// });

// //User6

// var andy = new User({
//   name: 'Andy Edwards',
//   local: {
//     email: 'andrew_edwards@gmail.com',
//     password: User.generateHash('password')
//   },
//   dob: 1980-05-23,
//   gender: 'Male',
//   rating: 1
// });

// andy.save(function(err, user) {
//   if (err) console.log(err);
//   console.log('Andy saved');
// });

// var booking6 = new Booking({
//   user: andy,
//   date: 2015-10-11
// });

// booking6.save(function(err, booking6) {
//   if(err) console.log(err);
//   console.log('Booking saved');

//   Booking
//   .findOne(booking6.id)
//   .populate('user')
//   .exec(function(err, booking6) {
//     if (err) console.log(err);
//     // console.log('The user of the new booking is', booking6.user);
//   });
// });

