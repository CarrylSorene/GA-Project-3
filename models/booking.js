var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
  userId: {type: Number, ref: 'User'},
  date: Date
})

var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking