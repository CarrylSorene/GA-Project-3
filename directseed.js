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
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1970-02-12,
  gender: 'Male',
  rating: 2
});

robert.save(function(err, user) {
  if (err) console.log(err);
  console.log('robert saved');
});

var booking1 = new Booking({
  user: robert,
  date: 2015-10-09
});

booking1.save(function(err, booking1) {
  if(err) console.log(err);
  console.log('booking1 saved');

   Booking
  .findOne(booking1.id)
  .populate('user')
  .exec(function(err, booking1) {
    // console.log('Booking1: ', booking1.user);
    if (err) console.log(err);
  });
});

//User2

var casey = new User({
  name: 'Casey Bennett',
  local: {
    email: 'caseybennett@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 2001-12-03,
  gender: 'Male',
  rating: 3
});

casey.save(function(err, user) {
  if (err) console.log(err);
  // console.log('Casey saved');
});

var booking2 = new Booking({
  user: casey,
  date: 2015-10-09
});

booking2.save(function(err, booking2) {
  if(err) console.log(err);
  // console.log('Booking saved');

  Booking
  .findOne(booking2.id)
  .populate('user')
  .exec(function(err, booking2) {
    // console.log('Booking2: ', booking2);
    if (err) console.log(err);
  });
});

//User3

var willa = new User({
  name: 'Willa Morgan',
  local: {
    email: 'willa-morgan@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1994-09-12,
  gender: 'Female',
  rating: 3
});

willa.save(function(err, user) {
  if (err) console.log(err);
  // console.log('Willa saved');
});

var booking3 = new Booking({
  user: willa,
  date: 2015-10-09
});

booking3.save(function(err, booking3) {
  if(err) console.log(err);
  // console.log('Booking saved');

  Booking
  .findOne(booking3.id)
  .populate('user')
  .exec(function(err, booking3) {
    if (err) console.log(err);
  });
});

//User4

var samantha = new User({
  name: 'Samantha Wilson',
  local: {
    email: 'sammywilson@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1984-09-12,
  gender: 'Female',
  rating: 3
});

samantha.save(function(err, user) {
  if (err) console.log(err);
  // console.log('Samantha saved');
});

var booking4 = new Booking({
  user: samantha,
  date: 2015-10-11
});

booking4.save(function(err, booking4) {
  if(err) console.log(err);
  // console.log('Booking saved');

  Booking
  .findOne(booking4.id)
  .populate('user')
  .exec(function(err, booking4) {
    if (err) console.log(err);
  });
});

//User5

var alicia = new User({
  name: 'Alicia Stewart',
  local: {
    email: 'aliciastewart@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1986-04-29,
  gender: 'Female',
  rating: 2
});

alicia.save(function(err, user) {
  if (err) console.log(err);
  // console.log('Alicia saved');
});

var booking5 = new Booking({
  user: alicia,
  date: 2015-10-12
});

booking5.save(function(err, booking5) {
  if(err) console.log(err);
  // console.log('Booking saved');

  Booking
  .findOne(booking5.id)
  .populate('user')
  .exec(function(err, booking5) {
    if (err) console.log(err);
  });
});

//User6

var andy = new User({
  name: 'Andy Edwards',
  local: {
    email: 'andrew_edwards@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1980-05-23,
  gender: 'Male',
  rating: 6
});

andy.save(function(err, user) {
  if (err) console.log(err);
  // console.log('Andy saved');
});

var booking6 = new Booking({
  user: andy,
  date: 2015-10-11
});

booking6.save(function(err, booking6) {
  if(err) console.log(err);
  // console.log('Booking saved');

  Booking
  .findOne(booking6.id)
  .populate('user')
  .exec(function(err, booking6) {
    if (err) console.log(err);
  });
});

//User7
var ziggy = new User({
  name: 'Ziggy Stewart',
  local: {
    email: 'ziggystew@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 2002-04-13,
  gender: 'Male',
  rating: 1
});

ziggy.save(function(err, user) {
  if (err) console.log(err);
  // console.log('Ziggy saved');
});

var booking7 = new Booking({
  user: ziggy,
  date: 2015-10-29
});

booking7.save(function(err, booking7) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking7.id)
  .populate('user')
  .exec(function(err, booking7) {
    if (err) console.log(err);
  });
});

//User8
var drew = new User({
  name: 'Drew Stewart',
  local: {
    email: 'drewstew@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1999-09-07,
  gender: 'Male',
  rating: 1
});

drew.save(function(err, user) {
  if (err) console.log(err);
  // console.log('Drew saved');
});

var booking8 = new Booking({
  user: drew,
  date: 2015-10-29
});

booking8.save(function(err, booking8) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking8.id)
  .populate('user')
  .exec(function(err, booking8) {
    if (err) console.log(err);
  });
});
//User9
var marcus = new User({
  name: 'Marcus Stewart',
  local: {
    email: 'marcusstewart@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1974-11-03,
  gender: 'Male',
  rating: 5
});

marcus.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking9 = new Booking({
  user: marcus,
  date: 2015-10-11
});

booking9.save(function(err, booking9) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking9.id)
  .populate('user')
  .exec(function(err, booking9) {
    if (err) console.log(err);
  });
});
//User10
var celia = new User({
  name: 'Celia Stewart',
  local: {
    email: 'celiastewart@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1974-11-02,
  gender: 'Female',
  rating: 5
});

celia.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking10 = new Booking({
  user: celia,
  date: 2015-10-11
});

booking10.save(function(err, booking10) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking10.id)
  .populate('user')
  .exec(function(err, booking10) {
    if (err) console.log(err);
  });
});
//User11
var frankie = new User({
  name: 'Frankie Cartwright',
  local: {
    email: 'frankiecartwright@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 2001-07-27,
  gender: 'Male',
  rating: 3
});

frankie.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking11 = new Booking({
  user: frankie,
  date: 2015-10-09
});

booking11.save(function(err, booking11) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking11.id)
  .populate('user')
  .exec(function(err, booking11) {
    if (err) console.log(err);
  });
});
//User12
var claira = new User({
  name: 'Claira Bennett',
  local: {
    email: 'clairabennett@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 2000-03-08,
  gender: 'Female',
  rating: 2
});

claira.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking12 = new Booking({
  user: claira,
  date: 2015-10-12
});

booking12.save(function(err, booking12) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking12.id)
  .populate('user')
  .exec(function(err, booking12) {
    if (err) console.log(err);
  });
});
//User13
var ruby = new User({
  name: 'Ruby Morgan',
  local: {
    email: 'rubymorgan@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 2002-06-23,
  gender: 'Female',
  rating: 3
});

ruby.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking13 = new Booking({
  user: ruby,
  date: 2015-10-09
});

booking13.save(function(err, booking13) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking13.id)
  .populate('user')
  .exec(function(err, booking13) {
    if (err) console.log(err);
  });
});

//User14
var jason = new User({
  name: 'Jason Williams',
  local: {
    email: 'jasonwilliams@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1999-12-07,
  gender: 'Male',
  rating: 4
});

jason.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking14 = new Booking({
  user: jason,
  date: 2015-10-09
});

booking14.save(function(err, booking14) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking14.id)
  .populate('user')
  .exec(function(err, booking14) {
    if (err) console.log(err);
  });
});

//User15
var sasha = new User({
  name: 'Sasha Lewis',
  local: {
    email: 'sashalewis@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1978-03-18,
  gender: 'Female',
  rating: 6
});

sasha.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking15 = new Booking({
  user: sasha,
  date: 2015-10-11
});

booking15.save(function(err, booking15) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking15.id)
  .populate('user')
  .exec(function(err, booking15) {
    if (err) console.log(err);
  });
});

//User16
var freddi = new User({
  name: 'Freddi Schwartz',
  local: {
    email: 'fredericaschwartz@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1980-07-07,
  gender: 'Female',
  rating: 3
});

freddi.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking16 = new Booking({
  user: freddi,
  date: 2015-10-09
});

booking16.save(function(err, booking16) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking16.id)
  .populate('user')
  .exec(function(err, booking16) {
    if (err) console.log(err);
  });
});
//User17
var nick = new User({
  name: 'Nick Schwartz',
  local: {
    email: 'nickschwartz@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 1980-05-24,
  gender: 'Male',
  rating: 4
});

nick.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking17 = new Booking({
  user: nick,
  date: 2015-10-09
});

booking17.save(function(err, booking17) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking17.id)
  .populate('user')
  .exec(function(err, booking17) {
    if (err) console.log(err);
  });
});
//User18
var damian = new User({
  name: 'Damian Taylor',
  local: {
    email: 'damiantaylor@gmail.com',
    password: '$2a$08$zcLdu3rLFv1L.bzgqs7Og.nw5y1gezdUrSqiRitanbUtchuMGOzI2'
  },
  dob: 2002-08-29,
  gender: 'Male',
  rating: 1
});

damian.save(function(err, user) {
  if (err) console.log(err);
  // console.log('User saved');
});

var booking18 = new Booking({
  user: damian,
  date: 2015-10-29
});

booking18.save(function(err, booking18) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking18.id)
  .populate('user')
  .exec(function(err, booking18) {
    if (err) console.log(err);
  });
});

//Booking19
var booking19 = new Booking({
  user: alicia,
  date: 2015-10-29
});

booking19.save(function(err, booking19) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking19.id)
  .populate('user')
  .exec(function(err, booking19) {
    if (err) console.log(err);
  });
});

//Booking20
var booking20 = new Booking({
  user: ziggy,
  date: 2015-10-14
});

booking20.save(function(err, booking20) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking20.id)
  .populate('user')
  .exec(function(err, booking20) {
    if (err) console.log(err);
  });
});

//Booking21
var booking21 = new Booking({
  user: drew,
  date: 2015-10-14
});

booking21.save(function(err, booking21) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking21.id)
  .populate('user')
  .exec(function(err, booking21) {
    if (err) console.log(err);
  });
});

//Booking22
var booking22 = new Booking({
  user: robert,
  date: 2015-10-13
});

booking22.save(function(err, booking22) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking22.id)
  .populate('user')
  .exec(function(err, booking22) {
    if (err) console.log(err);
  });
});

//Booking23
var booking23 = new Booking({
  user: andy,
  date: 2015-10-31
});

booking23.save(function(err, booking23) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking23.id)
  .populate('user')
  .exec(function(err, booking23) {
    if (err) console.log(err);
  });
});

//Booking24
var booking24 = new Booking({
  user: celia,
  date: 2015-10-31
});

booking24.save(function(err, booking24) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking24.id)
  .populate('user')
  .exec(function(err, booking24) {
    if (err) console.log(err);
  });
});

//Booking25
var booking25 = new Booking({
  user: marcus,
  date: 2015-10-31
});

booking25.save(function(err, booking25) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking25.id)
  .populate('user')
  .exec(function(err, booking25) {
    if (err) console.log(err);
  });
});

//Booking26
var booking26 = new Booking({
  user: nick,
  date: 2015-10-13
});

booking26.save(function(err, booking26) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking26.id)
  .populate('user')
  .exec(function(err, booking26) {
    if (err) console.log(err);
  });
});

//Booking27
var booking27 = new Booking({
  user: freddi,
  date: 2015-10-13
});

booking27.save(function(err, booking27) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking27.id)
  .populate('user')
  .exec(function(err, booking27) {
    if (err) console.log(err);
  });
});

//Booking28
var booking28 = new Booking({
  user: willa,
  date: 2015-10-13
});

booking28.save(function(err, booking28) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking28.id)
  .populate('user')
  .exec(function(err, booking28) {
    if (err) console.log(err);
  });
});

//Booking29
var booking29 = new Booking({
  user: claira,
  date: 2015-10-14
});

booking29.save(function(err, booking29) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking29.id)
  .populate('user')
  .exec(function(err, booking29) {
    if (err) console.log(err);
  });
});

//Booking30
var booking30 = new Booking({
  user: casey,
  date: 2015-10-11
});

booking30.save(function(err, booking30) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking30.id)
  .populate('user')
  .exec(function(err, booking30) {
    if (err) console.log(err);
  });
});


//Booking31
var booking31 = new Booking({
  user: damian,
  date: 2015-10-14
});

booking31.save(function(err, booking31) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking31.id)
  .populate('user')
  .exec(function(err, booking31) {
    if (err) console.log(err);
  });
});

//Booking32
var booking32 = new Booking({
  user: freddi,
  date: 2015-10-09
});

booking32.save(function(err, booking32) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking32.id)
  .populate('user')
  .exec(function(err, booking32) {
    if (err) console.log(err);
  });
});

//Booking33
var booking33 = new Booking({
  user: frankie,
  date: 2015-10-11
});

booking33.save(function(err, booking33) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking33.id)
  .populate('user')
  .exec(function(err, booking33) {
    if (err) console.log(err);
  });
});

//Booking34
var booking34 = new Booking({
  user: jason,
  date: 2015-10-13
});

booking34.save(function(err, booking34) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking34.id)
  .populate('user')
  .exec(function(err, booking34) {
    if (err) console.log(err);
  });
});

//Booking35
var booking35 = new Booking({
  user: ruby,
  date: 2015-10-13
});

booking35.save(function(err, booking35) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking35.id)
  .populate('user')
  .exec(function(err, booking35) {
    if (err) console.log(err);
  });
});

//Booking36
var booking36 = new Booking({
  user: sasha,
  date: 2015-10-11
});

booking36.save(function(err, booking36) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking36.id)
  .populate('user')
  .exec(function(err, booking36) {
    if (err) console.log(err);
  });
});

//Booking37
var booking37 = new Booking({
  user: sasha,
  date: 2015-10-31
});

booking37.save(function(err, booking37) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking37.id)
  .populate('user')
  .exec(function(err, booking37) {
    if (err) console.log(err);
  });
});

//Booking38
var booking38 = new Booking({
  user: ziggy,
  date: 2015-10-23
});

booking38.save(function(err, booking38) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking38.id)
  .populate('user')
  .exec(function(err, booking38) {
    if (err) console.log(err);
  });
});

//Booking39
var booking39 = new Booking({
  user: drew,
  date: 2015-10-13
});

booking39.save(function(err, booking39) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking39.id)
  .populate('user')
  .exec(function(err, booking39) {
    if (err) console.log(err);
  });
});

//Booking40
var booking40 = new Booking({
  user: damian,
  date: 2015-10-24
});

booking40.save(function(err, booking40) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking40.id)
  .populate('user')
  .exec(function(err, booking40) {
    if (err) console.log(err);
  });
});

//Booking41
var booking41 = new Booking({
  user: alicia,
  date: 2015-10-24
});

booking41.save(function(err, booking41) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking41.id)
  .populate('user')
  .exec(function(err, booking41) {
    if (err) console.log(err);
  });
});

//Booking42
var booking42 = new Booking({
  user: robert,
  date: 2015-10-26
});

booking42.save(function(err, booking42) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking42.id)
  .populate('user')
  .exec(function(err, booking42) {
    if (err) console.log(err);
  });
});

//Booking43
var booking43 = new Booking({
  user: claira,
  date: 2015-10-18
});

booking43.save(function(err, booking43) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking43.id)
  .populate('user')
  .exec(function(err, booking43) {
    if (err) console.log(err);
  });
});

//Booking44
var booking44 = new Booking({
  user: freddi,
  date: 2015-10-26
});

booking44.save(function(err, booking44) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking44.id)
  .populate('user')
  .exec(function(err, booking44) {
    if (err) console.log(err);
  });
});

//Booking45
var booking45 = new Booking({
  user: samantha,
  date: 2015-10-18
});

booking45.save(function(err, booking45) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking45.id)
  .populate('user')
  .exec(function(err, booking45) {
    if (err) console.log(err);
  });
});

//Booking46
var booking46 = new Booking({
  user: casey,
  date: 2015-10-17
});

booking46.save(function(err, booking46) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking46.id)
  .populate('user')
  .exec(function(err, booking46) {
    if (err) console.log(err);
  });
});

//Booking47
var booking47 = new Booking({
  user: frankie,
  date: 2015-10-17
});

booking47.save(function(err, booking47) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking47.id)
  .populate('user')
  .exec(function(err, booking47) {
    if (err) console.log(err);
  });
});

//Booking48
var booking48 = new Booking({
  user: jason,
  date: 2015-10-20
});

booking48.save(function(err, booking48) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking48.id)
  .populate('user')
  .exec(function(err, booking48) {
    if (err) console.log(err);
  });
});

//Booking49
var booking49 = new Booking({
  user: willa,
  date: 2015-10-20
});

booking49.save(function(err, booking49) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking49.id)
  .populate('user')
  .exec(function(err, booking49) {
    if (err) console.log(err);
  });
});

//Booking50
var booking50 = new Booking({
  user: nick,
  date: 2015-10-31
});

booking50.save(function(err, booking50) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking50.id)
  .populate('user')
  .exec(function(err, booking50) {
    if (err) console.log(err);
  });
});


//Booking51
var booking51 = new Booking({
  user: ruby,
  date: 2015-10-20
});

booking51.save(function(err, booking51) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking51.id)
  .populate('user')
  .exec(function(err, booking51) {
    if (err) console.log(err);
  });
});

//Booking52
var booking52 = new Booking({
  user: celia,
  date: 2015-10-27
});

booking52.save(function(err, booking52) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking52.id)
  .populate('user')
  .exec(function(err, booking52) {
    if (err) console.log(err);
  });
});

//Booking53
var booking53 = new Booking({
  user: marcus,
  date: 2015-10-16
});

booking53.save(function(err, booking53) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking53.id)
  .populate('user')
  .exec(function(err, booking53) {
    if (err) console.log(err);
  });
});

//Booking54
var booking54 = new Booking({
  user: sasha,
  date: 2015-10-16
});

booking54.save(function(err, booking54) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking54.id)
  .populate('user')
  .exec(function(err, booking54) {
    if (err) console.log(err);
  });
});

//Booking55
var booking55 = new Booking({
  user: andy,
  date: 2015-10-27
});

booking55.save(function(err, booking55) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking55.id)
  .populate('user')
  .exec(function(err, booking55) {
    if (err) console.log(err);
  });
});

//Booking56
var booking56 = new Booking({
  user: nick,
  date: 2015-10-27
});

booking56.save(function(err, booking56) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking56.id)
  .populate('user')
  .exec(function(err, booking56) {
    if (err) console.log(err);
  });
});

//Booking57
var booking57 = new Booking({
  user: celia,
  date: 2015-10-09
});

booking57.save(function(err, booking57) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking57.id)
  .populate('user')
  .exec(function(err, booking57) {
    if (err) console.log(err);
  });
});

//Booking58
var booking58 = new Booking({
  user: marcus,
  date: 2015-10-13
});

booking58.save(function(err, booking58) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking58.id)
  .populate('user')
  .exec(function(err, booking58) {
    if (err) console.log(err);
  });
});

//Booking59
var booking59 = new Booking({
  user: sasha,
  date: 2015-10-27
});

booking59.save(function(err, booking59) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking59.id)
  .populate('user')
  .exec(function(err, booking59) {
    if (err) console.log(err);
  });
});

//Booking60
var booking60 = new Booking({
  user: andy,
  date: 2015-10-16
});

booking60.save(function(err, booking60) {
  if(err) console.log(err);
  // console.log('Booking saved');

   Booking
  .findOne(booking60.id)
  .populate('user')
  .exec(function(err, booking60) {
    if (err) console.log(err);
  });
});