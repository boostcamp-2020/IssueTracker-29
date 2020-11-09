const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const config = require('./config')[process.env.NODE_ENV || 'development'];
const passportConfig = require('./middlewares/auth/passport');

const app = express();

const indexRouter = require('./routes');

// view engine setup
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(
  session({
    secret: config.secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
passportConfig();

// HACK: 현재 OAuth가 적용되지 않아 강제로 user를 넣어주는 middleware. 이후 OAuth가 이식되면 뺄 것.
// app.use((req, res, next) => {
//   req.user = {id: 1};
//   next();
// })

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ success: false, status: err.status });
});

module.exports = app;
