var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var phoneBookRouter = require('./routes/phonebook');

var app = express();

mongoose.connect('mongodb://localhost/phonebooks', {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/phonebooks', phoneBookRouter);

module.exports = app;
