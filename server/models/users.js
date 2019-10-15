var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phoneBookSchema = new Schema({
  idUser: String,
  name:  String,
  phone: String,

})

module.exports = mongoose.model('noPhoneBook', phoneBookSchema)