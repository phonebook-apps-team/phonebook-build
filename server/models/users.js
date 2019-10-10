var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phoneBookSchema = new Schema({
  idUser: String,
  name:  String,
  phone: Number,

})

module.exports = mongoose.model('noPhoneBook', phoneBookSchema)