var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phoneBookSchema = new Schema({
  name:  String,
  numberPhone: Number,

})

module.exports = mongoose.model('noPhoneBook', phoneBookSchema)