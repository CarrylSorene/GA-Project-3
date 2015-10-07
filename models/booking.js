var mongoose = require('mongoose');
var Schema = mongoose.Schema
var User = require('./user')

var bookingSchema = new mongoose.Schema({
  user: [{type: Schema.Types.ObjectId, ref: 'User'}],
  date: Date
})

var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking
