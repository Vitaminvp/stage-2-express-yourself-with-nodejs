const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/fighters', usersRouter);

module.exports = app;
