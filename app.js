var express = require('express');
var path = require('path');
var logger = require('morgan');
// Database setup
require('./config/database');
var agendaRouter = require('./app/routes/agenda');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', agendaRouter);

module.exports = app;
