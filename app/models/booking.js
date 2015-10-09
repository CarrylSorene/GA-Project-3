var mongoose = require('mongoose');
var Schema = mongoose.Schema
var User = require('./user')

var bookingSchema = new mongoose.Schema({
  user1: [{type: Schema.Types.ObjectId, ref: 'User'}],
  user2: [{type: Schema.Types.ObjectId, ref: 'User'}],
  date: Date
})

module.exports = mongoose.model('Booking', bookingSchema);