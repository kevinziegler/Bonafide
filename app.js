var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = rquire('passport');
var LocalStrategy = require('passport-local').Strategy;

mongoose.connect('mongodb://localhost/bonafide');

var routes = require('./routes/index'),
    auth = require('./routes/auth'),
    certificates = require('./routes/certificates'),
    users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.session({
    secret : "thisIsATemporarySecret",
    cookie: { httpOnly : true, secure: true {
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.csrf());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.locals.csrftoken = req.session._csrf;
    next();
});

app.use('/', routes);
app.use('/auth', auth);
app.use('/certificates', certificates);
app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
