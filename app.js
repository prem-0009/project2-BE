console.clear()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
// mongoose connector
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
mongoose.connect(process.env.MONGODB_URI, mongooseOptions)
        .then(() => console.log('MONGODB CONNECTED'))
        .catch(err => console.log(err));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users/users');
var mealsRouter = require('./routes/meals/meals');
var workoutRouter = require('./routes/workout/workout');

const app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter); 
app.use('/api/meals', mealsRouter); 
app.use('/api/workout', workoutRouter); 
// app.listen(4000, () => console.log('Backend on port 4000'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
